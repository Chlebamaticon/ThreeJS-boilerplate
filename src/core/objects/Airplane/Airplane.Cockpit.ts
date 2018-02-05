import {BoxGeometry, Mesh, MeshPhongMaterial, Object3D} from "three";
import Colors from "../../../config/color.palette";

export default class Cockpit {
    protected $parent: Object3D;
    private geom: BoxGeometry = new BoxGeometry(60, 50, 50, 1, 1, 1);
    private mat: MeshPhongMaterial = new MeshPhongMaterial({ color: Colors.red, flatShading: true });
    public mesh: Mesh;
    constructor(parentObject: Object3D) {
        this.$parent = parentObject;

        this.mesh = new Mesh(this.geom, this.mat);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;

        this.$parent.add(this.mesh);
    }
}