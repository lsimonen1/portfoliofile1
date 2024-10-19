/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { Car, Car2 } from "./08-07-car.js";
import { terrain } from "./ground_terrain.js";
import { Object4, dirtGround, dirtGroundEdge, buildingShort, WORLDBOX, store, tunnel } from "./world_scenery.js";
import { building, tree } from "./world_scenery.js";
import { road } from "./world_scenery.js";
import{ForkLift, DumpTruck, GrCrane, GrExcavator} from "./07-09-constructionobjects.js";
import * as SimpleObjects from "../libs/CS559-Framework/SimpleObjects.js";
import { shaderMaterial } from "../libs/CS559-Framework/shaderHelper.js";


export function main(world) {
//shader stuff
let shaderMat = shaderMaterial("../final_city/shader1.vs", "../final_city/shader1.fs", {
    side: T.DoubleSide,
});

world.add(new SimpleObjects.GrSphere({z:-16, x: 8, y: 0, material: shaderMat }));


//lights
var light = new T.PointLight( 0xffffff );
light.position.set(100, 200, 300);
light.lookAt(new T.Vector3( 0, 0, 0 ) );

//skybox
let skybox = new WORLDBOX();
world.add(skybox);

//World terrain
let dirtPit = new dirtGround(9,-0.995,-12);
world.add(dirtPit);

let tree1 = new tree(-10,1,10,1);
world.add(tree1);

let tree2 = new tree(-15,1,15,1);
world.add(tree2);
let tree3 = new tree(-8,1,18,1);
world.add(tree3);
let tree4 = new tree(8,1,18,1);
world.add(tree4);
let tree5 = new tree(15,1,18,1);
world.add(tree5);

let dirtedge = new dirtGroundEdge(10,1,-20,0);
let dirtedge2 = new dirtGroundEdge(20,1,-12,-1.5708);

world.add(dirtedge);
world.add(dirtedge2);

//Buildings or anything immobile
let dirtpile = new Object4(13,1,-5);
world.add(dirtpile);

let road1 = new road(0,-0.99,0,0);
world.add(road1);
let road2 = new road(-21.5,-0.99,-4,1.5708);
world.add(road2);

let skyscraper1 = new building(-10,0,-18,0);
let skyscraper2 = new building(-12,0,-18,0);
let skyscraper3 = new building(-14,0,-18,0);
let skyscraper4 = new building(-18,0,-17,1.5708);
let skyscraper5 = new building(-18,0,-14,1.5708);
let skyscraper6 = new building(-18,0,-11,1.5708);

let skyscraper7 = new buildingShort(-18,0,1,1.5708);
let skyscraper8 = new building(-18,0,5,1.5708);
let skyscraper9 = new buildingShort(-6,0,-18,0);
let skyscraper10 = new buildingShort(18,0,9,1.5708);
world.add(skyscraper10);

let tunnel1 = new tunnel(0,0,-19,0);
world.add(tunnel1);
let tunnel2 = new tunnel(0,0,20,1.5708*2);
world.add(tunnel2);

let store1 = new store(-8,0,3,0);
world.add(store1);

//building2

world.add(skyscraper1);
world.add(skyscraper2);
world.add(skyscraper3);
world.add(skyscraper4);
world.add(skyscraper5);
world.add(skyscraper6);
world.add(skyscraper7);
world.add(skyscraper8);
world.add(skyscraper9);



//moving objects

let forklift = new ForkLift({x:13, z:-8, y:0});
world.add(forklift);
let dumptruck = new DumpTruck({x:8, z:-14, y:0});
world.add(dumptruck);
let crane = new GrCrane({x:5, z:-10, y:0});
world.add(crane);
let excavator = new GrExcavator({x:12, z:-16, y:0});
world.add(excavator);
let car1 = new Car(1,0.1,-23);
world.add(car1);
let car2 = new Car2(-0.8,0.1,0,1.5708*2);
world.add(car2);


}

