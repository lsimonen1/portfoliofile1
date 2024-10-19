/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

let carCount = 0;
export class Car extends GrObject {
  
  
  /* @param {Object} params
  */

 constructor(x,y,z) {
  let group = new T.Group();
  super(`Car-${carCount}`, group);
   
  let box1 = new T.BoxGeometry(2.1,2.1,2.1);
  
  let material3 = new T.MeshBasicMaterial({
    color: "#11F10F",
  });
  this.car = group;

  let  mesh = new T.Mesh(box1, material3);
  
        const geometry = new T.BoxGeometry(1, 0.5, 1);
        const geometry2 = new T.BoxGeometry(0.9, 0.3, 1);
  
        const mesh1 = new T.Mesh(
          new T.BoxGeometry(1, 0.4, 1.5),
          new T.MeshStandardMaterial({ color: "blue" })
        );
        mesh1.position.y = 0.3;
        mesh1.position.z = 0.25;
    
        const mesh7 = new T.Mesh(
          new T.BoxGeometry(0.8, 0.7, 0.5),
          new T.MeshStandardMaterial({ color: "black" })
        );
        mesh7.position.y = 0.4;
        mesh7.position.z = 0.4;
        
    
    
        const mesh2 = new T.Mesh(
          geometry2,
          new T.MeshStandardMaterial({ color: "blue" })
        );
        mesh2.position.y = 0.15;
        mesh2.position.z = 0.5;
    
    
        const mesh3 = new T.Mesh(
          new T.CylinderGeometry(0.2, 0.2, 0.2),
          new T.MeshStandardMaterial({ color: 0x000000 })
        );
          mesh3.rotateX(Math.PI/2);
          mesh3.rotateZ(Math.PI/2);
          mesh3.position.x = 0.45;
          mesh3.position.z = 0.7;
    
          const mesh5 = new T.Mesh(
            new T.CylinderGeometry(0.2, 0.2, 0.2),
            new T.MeshStandardMaterial({ color: 0x000000 })
          );
            mesh5.rotateX(Math.PI/2);
            mesh5.rotateZ(Math.PI/2);
            mesh5.position.x = -0.45;
            mesh5.position.z = 0.7;
    
            const mesh6 = new T.Mesh(
              new T.CylinderGeometry(0.2, 0.2, 0.2),
              new T.MeshStandardMaterial({ color: 0x000000 })
            );
              mesh6.rotateX(Math.PI/2);
              mesh6.rotateZ(Math.PI/2);
              mesh6.position.x = 0.45;
              mesh6.position.z = -0.3;
    
              const mesh4 = new T.Mesh(
                new T.CylinderGeometry(0.2, 0.2, 0.2),
                new T.MeshStandardMaterial({ color: 0x000000 })
              );
                mesh4.rotateX(Math.PI/2);
                mesh4.rotateZ(Math.PI/2);
                mesh4.position.x = -0.45;
                mesh4.position.z = -0.3;
    
  
                group.add(mesh3);
        group.add(mesh4)
        group.add(mesh5)
        group.add(mesh6)
        group.add(mesh7)
    
        group.add(mesh1);
        const g2 = new T.Group();
        g2.position.set(0, 0.5, -0.5);
        g2.add(mesh2);
        group.add(g2);
        group.position.y = 0.5;
        group.position.set(x, y, z);
    }
    
    /**
   * @param {number} delta
   * @param {number} timeOfDay
   * 
   */
    stepWorld(delta, timeOfDay) {
      let deltaSlowed = delta / 100;
      this.car.position.z = this.car.position.z +23;

      this.car.position.z = (this.car.position.z +deltaSlowed) % 46;
      this.car.position.z = this.car.position.z -23;
    }
  }

  export class Car2 extends GrObject {
  
  
    /* @param {Object} params
    */
  
   constructor(x,y,z,rotationNeeded) {
    let group = new T.Group();
    
    super(`redCar`, group);
     
    let box1 = new T.BoxGeometry(2.1,2.1,2.1);
    
    let material3 = new T.MeshBasicMaterial({
      color: "#11F10F",
    });
    this.car = group;
  
    let  mesh = new T.Mesh(box1, material3);
    
          const geometry = new T.BoxGeometry(1, 0.5, 1);
          const geometry2 = new T.BoxGeometry(0.9, 0.3, 1);
    
          const mesh1 = new T.Mesh(
            new T.BoxGeometry(1, 0.4, 1.5),
            new T.MeshStandardMaterial({ color: "red" })
          );
          mesh1.position.y = 0.3;
          mesh1.position.z = 0.25;
      
          const mesh7 = new T.Mesh(
            new T.BoxGeometry(0.8, 0.7, 0.5),
            new T.MeshStandardMaterial({ color: "black" })
          );
          mesh7.position.y = 0.4;
          mesh7.position.z = 0.4;
          
      
      
          const mesh2 = new T.Mesh(
            geometry2,
            new T.MeshStandardMaterial({ color: "red" })
          );
          mesh2.position.y = 0.15;
          mesh2.position.z = 0.5;
      
      
          const mesh3 = new T.Mesh(
            new T.CylinderGeometry(0.2, 0.2, 0.2),
            new T.MeshStandardMaterial({ color: 0x000000 })
          );
            mesh3.rotateX(Math.PI/2);
            mesh3.rotateZ(Math.PI/2);
            mesh3.position.x = 0.45;
            mesh3.position.z = 0.7;
      
            const mesh5 = new T.Mesh(
              new T.CylinderGeometry(0.2, 0.2, 0.2),
              new T.MeshStandardMaterial({ color: 0x000000 })
            );
              mesh5.rotateX(Math.PI/2);
              mesh5.rotateZ(Math.PI/2);
              mesh5.position.x = -0.45;
              mesh5.position.z = 0.7;
      
              const mesh6 = new T.Mesh(
                new T.CylinderGeometry(0.2, 0.2, 0.2),
                new T.MeshStandardMaterial({ color: 0x000000 })
              );
                mesh6.rotateX(Math.PI/2);
                mesh6.rotateZ(Math.PI/2);
                mesh6.position.x = 0.45;
                mesh6.position.z = -0.3;
      
                const mesh4 = new T.Mesh(
                  new T.CylinderGeometry(0.2, 0.2, 0.2),
                  new T.MeshStandardMaterial({ color: 0x000000 })
                );
                  mesh4.rotateX(Math.PI/2);
                  mesh4.rotateZ(Math.PI/2);
                  mesh4.position.x = -0.45;
                  mesh4.position.z = -0.3;
      
    
                  group.add(mesh3);
          group.add(mesh4)
          group.add(mesh5)
          group.add(mesh6)
          group.add(mesh7)
      
          group.add(mesh1);
          const g2 = new T.Group();
          g2.position.set(0, 0.5, -0.5);
          g2.add(mesh2);
          group.add(g2);
          group.position.y = 0.5;
          group.position.set(x, y, z);
          group.rotateY(rotationNeeded);
      }
      
      /**
     * @param {number} delta
     * @param {number} timeOfDay
     * 
     */
      stepWorld(delta, timeOfDay) {
        let deltaSlowed = delta / 100;
        this.car.position.z = this.car.position.z -23;
  
        this.car.position.z = (this.car.position.z -deltaSlowed) % 46;
        this.car.position.z = this.car.position.z +23;
      }
    }

