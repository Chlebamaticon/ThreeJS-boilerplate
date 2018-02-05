import {BoxGeometry, Mesh, MeshPhongMaterial, Object3D} from "three";
import Colors from "../../../config/color.palette";
import Propeller from "@core/objects/Airplane/Airplane.Propeller";

export default class Blades {
    protected $parent: Object3D;
    private geom: BoxGeometry = new BoxGeometry(10, 100, 20, 1, 1, 1);
    private mat: MeshPhongMaterial = new MeshPhongMaterial({ color: Colors.brownDark, flatShading: true });
    public propeller: Propeller = new Propeller();
    public mesh: Mesh;
    constructor(parentObject: Object3D) {
        this.$parent = parentObject;

        this.mesh = new Mesh(this.geom, this.mat);
        this.mesh.position.set(8,0,0);
        this.mesh.castShadow = true;
        this.mesh.receiveShadow = true;

        this.propeller.mesh.add(this.mesh);
        this.propeller.mesh.position.set(50,0,0);
        this.$parent.add(this.propeller.mesh);
    }
}