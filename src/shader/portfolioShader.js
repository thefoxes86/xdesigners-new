const portfolioShader = {
  vertexShader: /* glsl */ ` 
  varying vec2 vUv;
      void main () {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }`,

  fragmentShader: /* glsl */ `
      uniform sampler2D uTexture;
      varying vec2 vUv;
      
      void main () {
        vec4 color = texture2D(uTexture, vUv);
        gl_FragColor = color;
      }

      `,
};
export default portfolioShader;
