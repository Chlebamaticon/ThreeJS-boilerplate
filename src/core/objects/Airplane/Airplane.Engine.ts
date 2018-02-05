import {BoxGeometry, Mesh, MeshPhongMaterial, Object3D} from "three";
import Colors from "../../../config/color.palette";

export default class Engine {
    protected $parent: Object3D;
    private geom: BoxGeometry = new BoxGeometry(20, 50, 50, 1, 1, 1);
    private mat: MeshPhongMaterial = new MeshPhongMaterial({ color: Colors.white, flatShading: true });
    public mesh: Mesh;
    constructor(parentObject: Object3D) {
        this.$parent = parentObject;

        this.mesh = new Mesh(this.geom, this.mat);
        this.mesh.position.x = 40;
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;

        this.$parent.add(this.mesh);
    }
}