import {
    BoxGeometry,
    Mesh,
    MeshPhongMaterial,
    Object3D
} from "three";
import Colors from "../../config/color.palette";

export default class Cloud {
    private geom: BoxGeometry = new BoxGeometry(20, 20, 20);
    private mat: MeshPhongMaterial = new MeshPhongMaterial({ color: Colors.white });
    public mesh: Object3D = new Object3D();

    constructor () {
        const nBlocks = 3 + Math.floor(Math.random() * 3);
        for (let i = 0; i < nBlocks; i++) {
            const m = new Mesh(this.geom, this.mat);

            m.position.set(i * 15, Math.random() * 10, Math.random() * 10);
            m.rotation.y = Math.random() * Math.PI * 2;
            m.rotation.z = Math.random() * Math.PI * 2;

            const s = .1 + Math.random() * .9;
            m.scale.set(s, s, s);

            m.castShadow = true;
            m.receiveShadow = true;

            this.mesh
                .add(m);
        }
    }
}