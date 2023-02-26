



loader.load('./assets/hand11L.gltf', (gltf) => {
    hand11L = gltf.scene;
    hand11L.position.set(hand11LPos.x, hand11LPos.y, hand11LPos.z);
    hand01.add(hand11L);

    this._gui.add(hand11L.rotation, 'z', 0, 1.3, 0.01)
    .name('hand y');
    addSoundCallback(this._gui.__controllers[this._gui.__controllers.length - 1]);
    
    this._gui.__controllers[this._gui.__controllers.length - 1].onChange(() => {
        hand11R.rotation.z = -hand11L.rotation.z;
        hand12L.rotation.z = +hand11L.rotation.z;
        hand12R.rotation.z = -hand11L.rotation.z;
        hand21L.rotation.z = -hand11L.rotation.z;
        hand21R.rotation.z = +hand11L.rotation.z;
    });
    
});



this._gui.add(hand11L.rotation, 'z', 0, 1.3, 0.01)
    .name('hand y')
    .onChange(() => {
        sound1.play();
        hand11R.rotation.z = -hand11L.rotation.z;
        hand12L.rotation.z = +hand11L.rotation.z;
        hand12R.rotation.z = -hand11L.rotation.z;
        hand21L.rotation.z = -hand11L.rotation.z;
        hand21R.rotation.z = +hand11L.rotation.z;
    });
