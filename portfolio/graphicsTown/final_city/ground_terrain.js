/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

export class terrain extends GrObject {
    
constructor() {

let t1 = new T.TextureLoader().load("../final_city/dirtTexture.jpg");
let m1 = new T.MeshStandardMaterial({ map: t1,
     side: T.DoubleSide     });

const group = new T.Group();
const geometry1 = new T.BoxGeometry(2,2,5);

geometry1.translate(0,1,0);

/*
const uvs = new Float32Array( [
    0,0,
    0,0,
    0,0,        
    1,1,
    0,1,
    1,0
  ]);
  geometry.setAttribute('uv',new T.BufferAttribute(uvs,2));
*/

const cube1 = new T.Mesh( geometry1, m1 );

group.add(cube1);


super("dirt", group);
    }
}

