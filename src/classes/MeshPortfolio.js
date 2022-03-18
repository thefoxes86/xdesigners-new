import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
// import studio from "@theatre/studio";
import shader from "../shader/shaders";
import whiteShader from "../shader/whiteShader";
import portfolioShader from "../shader/portfolioShader";
import { overmind } from "../context/overmind";
import texture from "../images/Ennio-Morricone_bassa.jpeg";
import whiteTexture from "../images/white_texture.png";
import { portfolioImages } from "../images/images";
import gsap from "gsap";

class MeshPortfolio {
  constructor(props) {
    this.camera = "";
    this.scene = "";
    this.renderer = "";
    this.meshes = [];
    this.materials = [];
    this.whiteMaterial = "";
    this.portfolioMesh = "";
    this.portfolioMaterial = "";
    this.portfolioGeometry = "";
    this.portfolioMeshes = [];
    this.portfolioMaterials = [];
    this.cameraZ = 500;
    this.height = window.outerHeight;
    this.width = window.outerWidth;
    this.raycaster = new THREE.Raycaster();
    this.intersects = [];
    this.whiteMesh = "";
    this.time1 = 1;
    this.time2 = 1;
    this.value = 0;
    this.newImg = "";

    window.addEventListener("wheel", this.animationFluid.bind(this));
    // window.addEventListener("resize", this.onWindowResize.bind(this), false);
    window.addEventListener("click", this.onMouseMove.bind(this), false);
  }

  init() {
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.width / this.height,
      1,
      1000
    );
    this.camera.position.z = this.cameraZ;

    this.camera.fov =
      2 * Math.atan(this.height / 2 / this.cameraZ) * (180 / Math.Pi);

    this.scene = new THREE.Scene();

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    this.renderer.setSize(this.width, this.height);
    document.body.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableRotate = false;
    this.controls.enablePan = false;
    this.controls.zoomSpeed = 0.15;
    this.controls.update();
  }

  initPost() {
    // this.composer = new EffectComposer(this.renderer);
    // const renderPass = new RenderPass(this.scene, this.camera);
    // this.composer.addPass(renderPass);
    // this.effect1 = new ShaderPass(CustomPass);
    // this.composer.addPass(this.effect1);
  }

  addImage(image) {
    let img = new THREE.TextureLoader().load(image);
    img.needsUpdate = true;
    this.material.uniforms.tDiffuse.value = img;
  }

  addObjects() {
    // Image Shader
    let t = new THREE.TextureLoader().load(texture);
    t.needsUpdate = true;
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives: enable",
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        tDiffuse: { value: t },
        resolution: { value: new THREE.Vector4() },
      },
      vertexShader: shader.vertexShader,
      fragmentShader: shader.fragmentShader,
    });
    this.geometry = new THREE.PlaneGeometry(
      this.height * 1.9,
      this.height,
      1,
      200
    );
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.z = 1;
    this.scene.add(this.mesh);

    // White Shader
    this.material2 = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives: enable",
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
      },
      fragmentShader: whiteShader.fragmentShader,
      vertexShader: whiteShader.vertexShader,
    });

    this.whiteMesh = new THREE.Mesh(this.geometry, this.material2);
    this.whiteMesh.position.z = 10;
    this.scene.add(this.whiteMesh);

    //Portfolio Mesh Shader

    this.portfolioGeometry = new THREE.PlaneGeometry(
      1250 * 0.25,
      656 * 0.25,
      1
    );
    this.portfolioMaterial = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives: enable",
      },
      side: THREE.DoubleSide,
      uniforms: {
        uTexture: {
          value: "",
        },
      },
      vertexShader: portfolioShader.vertexShader,
      fragmentShader: portfolioShader.fragmentShader,
      transparent: true,
      opacity: 0.1,
    });
  }

  removeObjectFromScene(mesh) {
    this.scene.remove(mesh);
    mesh.geometry.dispose();
    mesh.material.dispose();
    mesh = undefined;
  }

  createAnimation(i, proj) {}
  animate() {
    this.time1 += 0.03;
    this.time2 += 0.001;

    this.material.uniforms.time.value = this.time1;

    this.portfolioMeshes.forEach((el, index) => {
      if (this.camera.position.z - el.position.z > 500) {
        console.log("stop", 100 / this.camera.position.z);
        el.material.opacity = 1000 / this.camera.position.z;
      }

      el.position.z += this.time2 * 0.03;
      el.rotation.x = (Math.sin(this.time2 * 10 * index) / 512) * 10;
      el.rotation.y = (Math.sin(this.time2 * 10 * index) / 512) * 10;
      el.rotation.z = (Math.sin(this.time2 * 10 * index) / 512) * 10;
    });

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate.bind(this));
  }

  onMouseMove(e) {
    // this.mouse.x = [(e.clientX / window.innerWidth) * 2] - 1;
    // this.mouse.y = -[(e.clientY / window.innerHeight) * 2] + 1;
  }

  animationFluid(e) {}

  onWindowResize() {
    this.height = window.outerHeight;
    this.width = window.outerWidth;
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.width, this.height);
  }

  eventListener() {
    overmind.eventHub.on("action:end", (execution) => {
      // Action on Hovered Object in Home
      if (execution.actionName === "activeHoveredObject") {
        if (overmind.state.activeHoveredMouse.hovered === true) {
          gsap.to(this.whiteMesh.position, {
            z: -10,
            duration: 2.5,
            ease: "easeInOut",
          });
        } else {
          gsap.to(this.whiteMesh.position, {
            z: 10,
            duration: 1.0,
            ease: "easeInOut",
          });
        }
      }

      // Action at change of the page
      if (execution.actionName === "changePage") {
        this.changePage(overmind.state.page);
      }
    });
    overmind.eventHub.on("action:start", (execution) => {
      if (overmind.state.activeHoveredMouse.hovered === true) {
        this.addImage(overmind.state.activeHoveredMouse.img);
      }
    });
  }

  changePage(pageName) {
    let image = "";

    switch (pageName) {
      case "home":
        this.init();
        this.initPost();
        this.addObjects();
        this.eventListener();
        this.animate();
      case "unione":
        this.whiteMesh.position.z = 10;
        break;
      case "portfolio":
        console.log("length", this.portfolioMeshes.length);
        this.time2 = 1;
        this.removeObjectFromScene(this.whiteMesh);
        this.removeObjectFromScene(this.mesh);

        if (portfolioImages && this.portfolioMeshes.length === 0) {
          portfolioImages.map(({ img }, index) => {
            let material = this.portfolioMaterial.clone();

            material.uniforms.uTexture.value = img;
            material.uniforms.uTexture.needsUpdate = true;

            this.portfolioMaterials.push(material);

            let mesh = new THREE.Mesh(this.portfolioGeometry, material);

            mesh.position.z = 35 * (index * index);
            mesh.position.x =
              index % 2 === 0 ? this.width * 0.15 : this.width * -0.15;
            mesh.position.y = 10 * Math.random() * (15 - -5) + -5;

            this.portfolioMeshes.push(mesh);

            this.scene.add(mesh);
          });
        }

        break;
      case "conosciamoci":
        this.whiteMesh.position.z = 10;
        break;
      case "contatti":
        this.whiteMesh.position.z = 10;
        break;
      default:
        break;
    }
  }
}

export default MeshPortfolio;
