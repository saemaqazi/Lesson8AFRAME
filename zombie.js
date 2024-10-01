AFRAME.registerComponent('zombie-fest', {
    init: function () {
        var posX = -50;
        var posY = -3;
        var posZ = -150;
        for (var i = 1; i <= 3; i++) {
            var id = 'zomb${i}';
            var position = { x: posX, y: posY, z: posZ };
            posX += 50;
            this.zombieSpawn(id, position);
        }
    },

    zombieSpawn: function (id, position) {
        var environEl = document.querySelector('a-scene');
        var zombEl = document.createElement('a-entity');
        zombEl.setAttribute('id', id);
        zombEl.setAttribute('position', position);
        zombEl.setAttribute('scale', '10 10 10');
        zombEl.setAttribute('gltf-model', '#zombie');
        zombEl.setAttribute('animation-mixer', { clip: 'Walk' });
        zombEl.setAttribute('animation', {property: 'position', to: '-10 0 1000', easing: 'linear', loop: 'true', dur: '150000'});
        environEl.appendChild(zombEl);
    }
})