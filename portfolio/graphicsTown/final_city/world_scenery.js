/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { OBJLoader } from "../libs/CS559-Three/examples/jsm/loaders/OBJLoader.js";


export class obj1 extends GrObject {
  constructor() {
    let geometry = new T.BufferGeometry();
    //
    // while the two triangles have 4 certices, we need to split the vertices
    // so that they can have different normals
    const vertices = new Float32Array([
      -1, 1, -1,     // 1A note that we need to keep this ccw
      0, 0, 0,       // 1B
      0, 2, 0,       // 1C
      1, 1, -1,
      1, 0, -1      // second triangle
    ]);

    geometry.setAttribute('position', new T.BufferAttribute(vertices, 3));
    const normals = new Float32Array([
      -0.5, 0, 0.5,
      0, 0, 1,
      0, 0, 1,      // or the way it would be facing if it were curved
      0.5, 0, 0.5,
      0.5, 0, 0.5
    ]);
    geometry.setAttribute("normal", new T.BufferAttribute(normals, 3));

    // set the indecies - our triangles are 0 1 2 and 3,2,1
    geometry.setIndex([0, 1, 2, 3, 2, 1, 3, 1, 4]);

    let material = new T.MeshStandardMaterial({
      color: "yellow",
      roughness: 0.75
    });

    let mesh = new T.Mesh(geometry, material);

    //
    super("TwoSmoothTriangleSharedd", mesh);
  }
}
//HERE IS DIRT
export class Object4 extends GrObject {
  constructor(x, y, z) {


    var vertices = new Float32Array([
      -1, -1, -1,
      1, -1, -1,
      1, 1, -1,
      -1, 1, -1,
      -1, -1, 1,
      1, -1, 1,
      1, 1, 1,
      -1, 1, 1,
    ]);

    var indices = new Uint16Array([
      1, 0, 2, 2, 0, 3, // front
      5, 1, 6, 6, 1, 2, // right
      4, 5, 7, 7, 5, 6, // back
      0, 4, 3, 3, 4, 7, // left
      6, 2, 3, 6, 3, 7, // top
      5, 4, 1, 1, 4, 0, // bottom
    ]);

    var geometry = new T.BufferGeometry();
    geometry.setAttribute('position', new T.BufferAttribute(vertices, 3));
    geometry.setIndex(new T.BufferAttribute(indices, 1));

    var uvs = new Float32Array([
      // Front face
      0, 0,
      1, 0,
      1, 1,
      0, 1,
      // Back face
      1, 0,
      1, 1,
      0, 1,
      0, 0,
      // Top face
      0, 0,
      1, 0,
      1, 1,
      0, 1,
      // Bottom face
      1, 1,
      0, 1,
      0, 0,
      1, 0,
      // Right face
      1, 0,
      1, 1,
      0, 1,
      0, 0,

      // Left face
      0, 0,
      1, 0,
      1, 1,
      0, 1


    ]);
    geometry.setAttribute('uv', new T.BufferAttribute(uvs, 2));


    var material1 = new T.MeshBasicMaterial({
      map: new T.TextureLoader().load("../final_city/bricks.jpg")
    });


    let tl = new T.TextureLoader().load("../final_city/bricks.jpg");

    let material = new T.MeshStandardMaterial({
      color: "white",
      roughness: 0.75,
      map: tl,
      side: T.DoubleSide
    });

    let mesh = new T.Mesh(geometry, material1);

    mesh.rotateX(1.5708 *2)
    //mesh.rotateY(1.5708)

    mesh.position.set(x,y,z);

    super("TwoSmoothTriangleShared", mesh);
  }
}
//HERE IS THE HIGHRISE
export class building extends GrObject {
  constructor(x, y, z ,rotationNeeded) {

    //makes the points
    var vertices = new Float32Array([
      -1, -1, -1,
      1, -1, -1,
      1, 1, -1,
      -1, 1, -1,
      -1, -1, 1,
      1, -1, 1,
      1, 1, 1,
      -1, 1, 1,
    ]);
    //makes the triangles
    var indices = new Uint16Array([
      1, 0, 2, 2, 0, 3, // front
      5, 1, 6, 6, 1, 2, // right
      4, 5, 7, 7, 5, 6, // back
      0, 4, 3, 3, 4, 7, // left
      2, 3, 6, 6, 3, 7, // top
      5, 4, 1, 1, 4, 0, // bottom
    ]);
    //puts them in geometry
    var geometry = new T.BufferGeometry();
    geometry.setAttribute('position', new T.BufferAttribute(vertices, 3));
    geometry.setIndex(new T.BufferAttribute(indices, 1));

    //draws the texture on
    var uvs = new Float32Array([
      // Front face
      1, 0,
      1, 1,
      0, 1,
      0, 0,
      // Back face
      1, 0,
      1, 1,
      0, 1,
      0, 0,
      // Top face
      0, 0,
      1, 0,
      1, 1,
      0, 1,
      // Bottom face
      1, 1,
      0, 1,
      0, 0,
      1, 0,
      // Right face
      1, 0,
      1, 1,
      0, 1,
      0, 0,
      // Left face
      0, 0,
      1, 0,
      1, 1,
      0, 1
    ]);
    geometry.setAttribute('uv', new T.BufferAttribute(uvs, 2));


    var material1 = new T.MeshBasicMaterial({
      map: new T.TextureLoader().load("../final_city/highrise.jpg")
    });


    let tl = new T.TextureLoader().load("../final_city/highrise.jpg");

    let material = new T.MeshStandardMaterial({
      color: "white",
      roughness: 0.75,
      map: tl,
      side: T.DoubleSide
    });

    let mesh = new T.Mesh(geometry, material1);
    mesh.rotateZ(1.5708);
    let mesh2 = new T.Mesh(geometry, material1);
    mesh2.rotateZ(1.5708);
    let mesh3 = new T.Mesh(geometry, material1);
    mesh3.rotateZ(1.5708);
    let mesh4 = new T.Mesh(geometry, material1);
    mesh4.rotateZ(1.5708);
    let mesh5 = new T.Mesh(geometry, material1);
    mesh5.rotateZ(1.5708);


    mesh.translateX(1);
    mesh.translateY(1);
    mesh2.translateX(3);
    mesh2.translateY(1);
    mesh3.translateX(5);
    mesh3.translateY(1);
    mesh4.translateX(7);
    mesh4.translateY(1);
    mesh5.translateX(9);
    mesh5.translateY(1);

    let group = new T.Group;
    group.add(mesh);
    group.add(mesh2);
    group.add(mesh3);
    group.add(mesh4);
    group.add(mesh5);

    group.translateX(x);
    group.translateY(y);
    group.translateZ(z);

    group.rotateY(rotationNeeded);
    super("building", group);
  }
}
//HERE IS THE ROAD
export class road extends GrObject {
  constructor(x, y, z ,rotationNeeded) {

    //makes the points
    var vertices = new Float32Array([
      -1.5, 1, -20,
      1.5, 1, -20,
      1.5, 1, 20,
      -1.5, 1, 20
    ]);
    //makes the triangles
    var indices = new Uint16Array([
      0, 3, 2, 0, 2, 1, // front
    ]);
    //puts them in geometry
    var geometry = new T.BufferGeometry();
    geometry.setAttribute('position', new T.BufferAttribute(vertices, 3));
    geometry.setIndex(new T.BufferAttribute(indices, 1));

    //draws the texture on
    var uvs = new Float32Array([
      // Front face
      0, 0,
      0, 1,
      1, 1,
      1, 0,
    ]);
    geometry.setAttribute('uv', new T.BufferAttribute(uvs, 2));

    let tl = new T.TextureLoader().load("../final_city/road.jpg", function (texture){
      texture.wrapS = texture.wrapT = T.RepeatWrapping;
    texture.offset.set( 1, 0 );
    texture.repeat.set( 10, 1 );
    });

    var material1 = new T.MeshBasicMaterial({
      map: tl
    });
    let material = new T.MeshStandardMaterial({
      color: "white",
      roughness: 0.75,
      map: tl,
      side: T.DoubleSide
    });

    let mesh = new T.Mesh(geometry, material1);
 
    let group = new T.Group;
    group.add(mesh);
    group.translateX(x);
    group.translateY(y);
    group.translateZ(z);

    group.rotateY(rotationNeeded);
    super("building", group);
  }
}
//HERE IS THE DIRT GROUND
export class dirtGround extends GrObject {
  constructor(x, y, z ,rotationNeeded) {

    //makes the points
    var vertices = new Float32Array([
      -8, 1, -8,
      11, 1, -8,
      11, 1, 15,
      -8, 1, 15
    ]);
    //makes the triangles
    var indices = new Uint16Array([
      0, 3, 2, 0, 2, 1, // front
    ]);
    //puts them in geometry
    var geometry = new T.BufferGeometry();
    geometry.setAttribute('position', new T.BufferAttribute(vertices, 3));
    geometry.setIndex(new T.BufferAttribute(indices, 1));

    //draws the texture on
    var uvs = new Float32Array([
      // Front face
      0, 0,
      0, 1,
      1, 1,
      1, 0,
    ]);
    geometry.setAttribute('uv', new T.BufferAttribute(uvs, 2));

    let tl = new T.TextureLoader().load("../final_city/dirtTexture.jpg", function (texture){
      texture.wrapS = texture.wrapT = T.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 10, 10 );
    });

    var material1 = new T.MeshBasicMaterial({
      map: tl
    });
    let material = new T.MeshStandardMaterial({
      color: "white",
      roughness: 0.75,
      map: tl,
      side: T.DoubleSide
    });

    let mesh = new T.Mesh(geometry, material1);
 
    let group = new T.Group;
    group.add(mesh);
    group.translateX(x);
    group.translateY(y);
    group.translateZ(z);
    super("building", group);
  }
}

//HERE IS THE DIRT GROUNDEDGE
export class dirtGroundEdge extends GrObject {
  constructor(x, y, z ,rotationNeeded) {

    //makes the points
    var vertices = new Float32Array([
      //top
      -8, 1, 0,
      11, 1, 0,
      11, 1, -1,
      -8, 1, -1,
      //front
      -8, 1, 0,
      11, 1, 0,
      11, -2, 0,
      -8, -2, 0,
      //back
      -8, 1, -1,
      11, 1, -1,
      11, -2, -1,
      -8, -2, -1,
      //side
      11, 1, 0,
      11, 1, -1,
      11, -2, -1,
      11, -2, 0,
      //side
      -8, 1, 0,
      -8, 1, -1,
      -8, -2, -1,
      -8, -2, 0,
    ]);
    //makes the triangles
    var indices = new Uint16Array([
      2, 3, 0, 1, 2, 0, // top
      4, 6, 5, 4, 7, 6, // front
      9, 11, 8, 9, 10, 11, // back
      12, 14, 13, 12, 15, 14, //right side
      16, 17, 18, 16, 18, 19 //left side
    ]);
    //puts them in geometry
    var geometry = new T.BufferGeometry();
    geometry.setAttribute('position', new T.BufferAttribute(vertices, 3));
    geometry.setIndex(new T.BufferAttribute(indices, 1));

    //draws the texture on
    var uvs = new Float32Array([
      // Front face
      0, 0,
      0, 1,
      1, 1,
      1, 0,

      0, 0,
      0, 1,
      1, 1,
      1, 0,

      0, 0,
      0, 1,
      1, 1,
      1, 0
    ]);
    geometry.setAttribute('uv', new T.BufferAttribute(uvs, 2));

    let tl = new T.TextureLoader().load("../final_city/dirtTexture.jpg", function (texture){
      texture.wrapS = texture.wrapT = T.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 10, 10 );
    });

    var material1 = new T.MeshBasicMaterial({
      map: tl
    });
    let material = new T.MeshStandardMaterial({
      color: "white",
      roughness: 0.75,
      map: tl,
      side: T.DoubleSide
    });

    let mesh = new T.Mesh(geometry, material1);
 
    let group = new T.Group;
    group.add(mesh);
    group.translateX(x);
    group.translateY(y);
    group.translateZ(z);
    group.rotateY(rotationNeeded);

    super("building", group);
  }
}

//HERE IS another building
export class buildingShort extends GrObject {
  constructor(x, y, z ,rotationNeeded) {

    //makes the points
    var vertices = new Float32Array([
      //top
      -2, 10, 0,
      2, 10, 0,
      2, 10, -1,
      -2, 10, -1,
      //front
      -2, 10, 0,
      2, 10, 0,
      2, 0, 0,
      -2, 0, 0,
      //back
      -2, 10, -1,
      2, 10, -1,
      2, 0, -1,
      -2, 0, -1,
      //side
      2, 10, 0,
      2, 10, -1,
      2, 0, -1,
      2, 0, 0,
      //side
      -2, 10, 0,
      -2, 10, -1,
      -2, 0, -1,
      -2, 0, 0,
    ]);
    //makes the triangles
    var indices = new Uint16Array([
      2, 3, 0, 1, 2, 0, // top
      4, 6, 5, 4, 7, 6, // front
      9, 11, 8, 9, 10, 11, // back
      12, 14, 13, 12, 15, 14, //right side
      16, 17, 18, 16, 18, 19 //left side
    ]);

    //puts them in geometry
    var geometry = new T.BufferGeometry();
    geometry.setAttribute('position', new T.BufferAttribute(vertices, 3));
    geometry.setIndex(new T.BufferAttribute(indices, 1));

    //draws the texture on
    var uvs = new Float32Array([
      // Front face
      
      0, 1,
      1, 1,
      1, 0,
      0, 0,

      
      0, 1,
      1, 1,
      1, 0,
      0, 0,

      0, 1,
      1, 1,
      1, 0,
      0, 0,

      0, 0,
      0, 1,
      1, 1,
      1, 0,

      0, 0,
      0, 1,
      1, 1,
      1, 0
    ]);
    geometry.setAttribute('uv', new T.BufferAttribute(uvs, 2));

    let tl = new T.TextureLoader().load("../final_city/buildingside.jpg", function (texture){
      texture.wrapS = texture.wrapT = T.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 1, 5);
    });

    var material1 = new T.MeshBasicMaterial({
      map: tl
      //color: "red"
    });
    let material = new T.MeshStandardMaterial({
      color: "white",
      roughness: 0.75,
      map: tl,
      side: T.DoubleSide
    });

    let mesh = new T.Mesh(geometry, material1);
 
    let group = new T.Group;
    group.add(mesh);
    group.translateX(x);
    group.translateY(y);
    group.translateZ(z);
    group.rotateY(rotationNeeded);

    super("building1", group);
  }
}

export class WORLDBOX extends GrObject {
  constructor() {

let box1 = new T.BoxGeometry(2000,2000,2000);
let handle = new T.SphereGeometry(0.2)

let tl = new T.TextureLoader().load("../final_city/sky.jpg");

let material3 = new T.MeshPhongMaterial({
  color: "white",
  map: tl
});



let material4 = new T.MeshBasicMaterial({
  color: "black",
});

let mesh = new T.Mesh(box1, material3);

mesh.material.side = T.DoubleSide;

      super("TwoSmoothTriangleShared", mesh);
  }
}

//HERE IS another building
export class buildingnew extends GrObject {
  constructor(x, y, z ,rotationNeeded) {

    //makes the points
    var vertices = new Float32Array([
      //top
      -8, 1, 0,
      11, 1, 0,
      11, 1, -1,
      -8, 1, -1,
      //front
      -8, 1, 0,
      11, 1, 0,
      11, -2, 0,
      -8, -2, 0,
      //back
      -8, 1, -1,
      11, 1, -1,
      11, -2, -1,
      -8, -2, -1,
      //side
      11, 1, 0,
      11, 1, -1,
      11, -2, -1,
      11, -2, 0,
      //side
      -8, 1, 0,
      -8, 1, -1,
      -8, -2, -1,
      -8, -2, 0,
    ]);
    //makes the triangles
    var indices = new Uint16Array([
      2, 3, 0, 1, 2, 0, // top
      4, 6, 5, 4, 7, 6, // front
      9, 11, 8, 9, 10, 11, // back
      12, 14, 13, 12, 15, 14, //right side
      16, 17, 18, 16, 18, 19 //left side
    ]);
    //puts them in geometry
    var geometry = new T.BufferGeometry();
    geometry.setAttribute('position', new T.BufferAttribute(vertices, 3));
    geometry.setIndex(new T.BufferAttribute(indices, 1));

    //draws the texture on
    var uvs = new Float32Array([
      // Front face
      0, 0,
      0, 1,
      1, 1,
      1, 0,

      0, 0,
      0, 1,
      1, 1,
      1, 0,

      0, 0,
      0, 1,
      1, 1,
      1, 0
    ]);
    geometry.setAttribute('uv', new T.BufferAttribute(uvs, 2));

    let tl = new T.TextureLoader().load("../final_city/dirtTexture.jpg", function (texture){
      texture.wrapS = texture.wrapT = T.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 10, 10 );
    });

    var material1 = new T.MeshBasicMaterial({
      map: tl
    });
    let material = new T.MeshStandardMaterial({
      color: "white",
      roughness: 0.75,
      map: tl,
      side: T.DoubleSide
    });

    let mesh = new T.Mesh(geometry, material1);
 
    let group = new T.Group;
    group.add(mesh);
    group.translateX(x);
    group.translateY(y);
    group.translateZ(z);
    group.rotateY(rotationNeeded);

    super("building", group);
  }
}

//HERE IS another building
let loader = new OBJLoader();


let suz = await loader.loadAsync("../final_city/07-suzanne.obj");

export class store extends GrObject {
  constructor(x, y, z ,rotationNeeded) {

  //makes the points
  var vertices = new Float32Array([
    //top
    -5, 4, 0,
    5, 4, 0,
    5, 4, -4,
    -5, 4, -4,
    //front
    -5, 4, 0,
    5, 4, 0,
    5, 0, 0,
    -5, 0, 0,
    //back
    -5, 4, -4,
    5, 4, -4,
    5, 0, -4,
    -5, 0, -4,
    //side
    5, 4, 0,
    5, 4, -4,
    5, 0, -4,
    5, 0, 0,
    //side
    -5, 4, 0,
    -5, 4, -4,
    -5, 0, -4,
    -5, 0, 0,
  ]);
  //makes the triangles
  var indices = new Uint16Array([
    2, 3, 0, 1, 2, 0, // top
    4, 6, 5, 4, 7, 6, // front
    9, 11, 8, 9, 10, 11, // back
    12, 14, 13, 12, 15, 14, //right side
    16, 17, 18, 16, 18, 19 //left side
  ]);
    //puts them in geometry
    var geometry = new T.BufferGeometry();
    geometry.setAttribute('position', new T.BufferAttribute(vertices, 3));
    geometry.setIndex(new T.BufferAttribute(indices, 1));

    //draws the texture on
    var uvs = new Float32Array([
      // Front face
      0, 0,
      0, 1,
      1, 1,
      1, 0,

      
      0, 1,
      1, 1,
      1, 0,
      0, 0,
      
      
      0, 1,
      1, 1,
      1, 0,
      0, 0,

      0, 1,
      1, 1,
      1, 0,
      0, 0,

      0, 1,
      1, 1,
      1, 0,
      0, 0
    ]);
    geometry.setAttribute('uv', new T.BufferAttribute(uvs, 2));

    let tl = new T.TextureLoader().load("../final_city/store.jpg", function (texture){
      texture.wrapS = texture.wrapT = T.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 1, 1 );
    });

    var material1 = new T.MeshBasicMaterial({
      map: tl
    });
    let material = new T.MeshStandardMaterial({
      color: "gray",
      roughness: 0.75,
      //map: tl,
      side: T.DoubleSide
    });

    let mesh = new T.Mesh(geometry, material1);
 
    let group = new T.Group;
    group.add(mesh);
    group.translateX(x);
    group.translateY(y);
    group.translateZ(z);
    group.rotateY(rotationNeeded);

const triangle = new T.Shape();
triangle.moveTo(0, 1);
triangle.lineTo(-5, 0);
triangle.lineTo(5, 0);
triangle.lineTo(0, 1);
const triangleGeometry = new T.ExtrudeGeometry(triangle, { depth: 4, bevelEnabled: false });
let roof = new T.Mesh(triangleGeometry, material);
group.add(roof);
roof.translateY(4);
roof.translateZ(-4);


//
let material3 = new T.MeshPhongMaterial({
  color: "gray",
  shininess: 50,
  specular: "white",
});


suz.position.set(0, 5, 0);
suz.scale.set(0.05, 0.05, 0.05);
suz.castShadow = true;
suz.traverse(obj => {
  if (obj instanceof T.Mesh) {
      obj.material = material3;
  }
});
group.add(suz);


    super("building", group);
  }
}

//HERE IS another building
export class tree extends GrObject {
  constructor(x, y, z ,rotationNeeded) {

    
    let tl = new T.TextureLoader().load("../final_city/store.jpg", function (texture){
      texture.wrapS = texture.wrapT = T.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 1, 1 );
    });

  let geometry = new T.ConeGeometry(3,5);

  let geometry1 = new T.CylinderGeometry(1,1,3);

    let material = new T.MeshStandardMaterial({
      color: "green",
      roughness: 0.75,
      side: T.DoubleSide
    });

    let material1 = new T.MeshStandardMaterial({
      color: "brown",
      roughness: 0.75,
      side: T.DoubleSide
    });

    let mesh = new T.Mesh(geometry, material);
    let mesh2 = new T.Mesh(geometry1, material1);

    let group = new T.Group;
mesh.translateY(4);
    group.add(mesh);
    group.add(mesh2);
    group.translateX(x);
    group.translateY(y);
    group.translateZ(z);
    group.rotateY(rotationNeeded);
    super("building", group);
  }
}

//HERE IS another building
export class tunnel extends GrObject {
  constructor(x, y, z ,rotationNeeded) {

  //makes the points
  var vertices = new Float32Array([
    //top
    -5, 4, 0,
    5, 4, 0,
    5, 4, -4,
    -5, 4, -4,
    //front
    -5, 4, 0,
    5, 4, 0,
    5, 0, 0,
    -5, 0, 0,
    //back
    -5, 4, -4,
    5, 4, -4,
    5, 0, -4,
    -5, 0, -4,
    //side
    5, 4, 0,
    5, 4, -4,
    5, 0, -4,
    5, 0, 0,
    //side
    -5, 4, 0,
    -5, 4, -4,
    -5, 0, -4,
    -5, 0, 0,
  ]);
  //makes the triangles
  var indices = new Uint16Array([
    2, 3, 0, 1, 2, 0, // top
    4, 6, 5, 4, 7, 6, // front
    9, 11, 8, 9, 10, 11, // back
    12, 14, 13, 12, 15, 14, //right side
    16, 17, 18, 16, 18, 19 //left side
  ]);
    //puts them in geometry
    var geometry = new T.BufferGeometry();
    geometry.setAttribute('position', new T.BufferAttribute(vertices, 3));
    geometry.setIndex(new T.BufferAttribute(indices, 1));

    //draws the texture on
    var uvs = new Float32Array([
      // Front face
      0, 0,
      0, 1,
      1, 1,
      1, 0,

      0, 1,
      1, 1,
      1, 0,
      0, 0,

    ]);
    geometry.setAttribute('uv', new T.BufferAttribute(uvs, 2));

    let tl = new T.TextureLoader().load("../final_city/tunnel.jpg", function (texture){
      texture.wrapS = texture.wrapT = T.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 1, 1 );
    });

    var material1 = new T.MeshBasicMaterial({
      map: tl
    });
    let material = new T.MeshStandardMaterial({
      color: "brown",
      roughness: 0.75,
      //map: tl,
      side: T.DoubleSide
    });

    let mesh = new T.Mesh(geometry, material1);
 
    let group = new T.Group;
    group.add(mesh);
    group.translateX(x);
    group.translateY(y);
    group.translateZ(z);
    group.rotateY(rotationNeeded);
    const triangle = new T.Shape();
    triangle.moveTo(0, 1);
    triangle.lineTo(-5, 0);
    triangle.lineTo(5, 0);
    triangle.lineTo(0, 1);
    const triangleGeometry = new T.ExtrudeGeometry(triangle, { depth: 4, bevelEnabled: false });
    let roof = new T.Mesh(triangleGeometry, material);
    group.add(roof);
    roof.translateY(4);
    roof.translateZ(-4);
    super("building", group);
  }
}