import {
    CylinderGeometry, FlatShading,
    Matrix4, Mesh, MeshPhongMaterial
} from "three";

import Colors from "../../config/color.palette";

export default class Sea {
    private geom: CylinderGeometry;
    private mat: MeshPhongMaterial;
    public mesh: Mesh;

    constructor() {
        this.geom = new CylinderGeometry(600, 600, 800, 40, 10);
        this.geom
            .applyMatrix(new Matrix4().makeRotationX(-Math.PI/2));

        this.mat = new MeshPhongMaterial({
            color: Colors.blue,
            transparent: true,
            opacity: .6,
            flatShading: true
        });

        this.mesh = new Mesh(this.geom, this.mat);
        this.mesh.receiveShadow = true;
    }
}