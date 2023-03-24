const curtains = new Curtains({
  container: "plane",
  watchScroll: false
});

const params = {
  vertexShaderID: "vs", 
  fragmentShaderID: "fs", 
  uniforms: {
    time: {
      name: "uTime", 
      type: "1f", 
      value: 0
    },
    resolution: {
      name: "resolution",
      type: "2f",
      value: new Vec2(window.innerWidth, window.innerHeight)
    }
  }
};

const plane = new Plane(curtains, document.getElementById("plane"), params);

plane.onRender(() => {
  plane.uniforms.time.value += 0.007; 
});