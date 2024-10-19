






var light = new THREE.PointLight( 0xffffff );
light.position.set(100, 200, 300);
light.lookAt( new THREE.Vector3( 0, 0, 0 ) );
scene.add( light );