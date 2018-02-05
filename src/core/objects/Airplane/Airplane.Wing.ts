import {BoxGeometry, FlatShading, Mesh, MeshPhongMaterial, Object3D} from "three";
import Colors from "../../../config/color.palette";

export default class Wing {
    protected $parent: Object3D;
    private geom: BoxGeometry = new BoxGeometry(40, 8, 150, 1, 1, 1);
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