import { Vector2 } from "three";

const MouseEffectPass = {
  uniforms: {
    tDiffuse: { value: null },
    tSize: { value: new Vector2(256, 256) },
    center: { value: new Vector2(0.5, 0.5) },
    angle: { value: 1.57 },
    scale: { value: 1.0 },
    time: { value: 0 },
    progress: { value: 0 },
    mouse: { value: new Vector2() },
    ratio: {
      value: window.innerWidth / window.innerHeight,
    },
    v: {
      value: 1.0 / 256.0,
    },
  },

  vertexShader: /* glsl */ `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

  fragmentShader: /* glsl */ `

		uniform vec2 center;
		uniform float angle;
		uniform float scale;
		uniform float time;
		uniform float v;
		uniform vec2 tSize;
		uniform float progress;
		uniform vec2 mouse;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		uniform float ratio;


		void main() {

			vec2 uv = vUv;
			uv = -1. + 2. * uv;
			uv -= mouse;
			uv.x *= ratio;
			if ( length(uv) > 0.25 ) {
				gl_FragColor = texture2D(tDiffuse, vUv);
			} 
			else {
				
			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;
			}
		}`,
};

export { MouseEffectPass };
