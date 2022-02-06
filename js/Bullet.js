AFRAME.registerComponent("bullets", {
  init: function () {
    this.shootBullet();
  },

  shootBullet: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "k") {
        var bullet = document.createElement("a-entity");
        var cam = document.querySelector("#camera");
        var posCam = cam.getAttribute("position");
        var scene = document.querySelector("#scene");

        bullet.setAttribute("geometry", {
          primitive: "sphere",
          radius: 0.1,
        });

        bullet.setAttribute("material", "color", "blue");

        bullet.setAttribute("position", {
          x: posCam.x,
          y: posCam.y,
          z: posCam.z,
        });

        var newCam = document.querySelector("#camera").object3D;

        var direction = new THREE.Vector3();
        newCam.getWorldDirection(direction);

        bullet.setAttribute("velocity", direction.multiplyScalar(-10));

        scene.appendChild(bullet);
      }
    });
  },
});
