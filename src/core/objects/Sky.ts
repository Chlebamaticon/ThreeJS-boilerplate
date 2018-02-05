import {Object3D} from "three";
import Cloud from "@core/objects/Cloud";

export default class Sky {
    public mesh: Object3D = new Object3D();
    constructor(nClouds: number) {
        const stepAngle = (Math.PI * 2) / nClouds;
        for (let i = 0; i < nClouds; i++) {
            const cloud = new Cloud();

            const angle = stepAngle * i;
            const height = 750 + (Math.random() * 200);

            cloud.mesh
                .position.y = Math.sin(angle) * height;
            cloud.mesh
                .position.x = Math.cos(angle) * height;
            cloud.mesh
                .rotation.z = angle + (Math.PI / 2);
            cloud.mesh
                .position.z = angle + Math.PI/2;

            cloud.mesh
                .position.z = -400-Math.random() * 400;

            const s = 1 + Math.random() * 2;
            cloud.mesh
                .scale.set(s, s, s);

            this.mesh.add(cloud.mesh);
        }
    }
}