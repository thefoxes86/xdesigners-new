import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
// import studio from "@theatre/studio";
import shader from "../shader/shaders";
import whiteShader from "../shader/whiteShader";
import { overmind } from "../context/overmind";
import texture from "../images/Ennio-Morricone_bassa.jpeg";
import whiteTexture from "../images/white_texture.png";

import gsap from "gsap";

class MeshPortfolio {
  constructor(props) {
    this.camera = "";
    this.scene = "";
    this.renderer = "";
    this.meshes = [];
    this.materials = [];
    this.whiteMaterial = "";
    this.cameraZ = 500;
    this.height = window.outerHeight;
    this.width = window.outerWidth;
    this.raycaster = new THREE.Raycaster();
    this.intersects = [];
    this.whiteMesh = "";
    this.time = 1;
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
      100,
      1000
    );
    this.camera.position.z = this.cameraZ;

    this.camera.fov =
      2 * Math.atan(this.height / 2 / this.cameraZ) * (180 / Math.Pi);

    this.scene = new THREE.Scene();

    this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });

    this.renderer.setSize(this.width, this.height);
    document.body.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
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
  }

  createAnimation(i, proj) {}
  animate() {
    this.time += 0.03;

    this.material.uniforms.time.value = this.time;

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
    });
    overmind.eventHub.on("action:start", (execution) => {
      if (overmind.state.activeHoveredMouse.hovered === true) {
        this.addImage(overmind.state.activeHoveredMouse.img);
      }
    });
  }
}

export default MeshPortfolio;
