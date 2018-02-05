import {BoxGeometry, FlatShading, Mesh, MeshPhongMaterial, Object3D} from "three";
import Colors from "../../../config/color.palette";

export default class Propeller {
    protected $parent: Object3D;
    private geom: BoxGeometry = new BoxGeometry(20, 10, 10, 1, 1, 1);
    private mat: MeshPhongMaterial = new MeshPhongMaterial({ color: Colors.brown, flatShading: true });
    public mesh: Mesh;
    constructor() {
        this.mesh = new Mesh(this.geom, this.mat);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;
    }
}