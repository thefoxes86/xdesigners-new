const whiteShader = {
  vertexShader: /* glsl */ ` 
      void main () {
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }`,

  fragmentShader: /* glsl */ `
      uniform float time;
      
      void main () {
        gl_FragColor = vec4(1.,1.,1., 1.0);
      }

      `,
};
export default whiteShader;
