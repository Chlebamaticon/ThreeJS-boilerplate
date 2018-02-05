import {Mesh, Object3D} from "three";
import Cockpit from "@core/objects/Airplane/Airplane.Cockpit";
import Engine from "@core/objects/Airplane/Airplane.Engine";
import Blades from "@core/objects/Airplane/Airplane.Blades";
import Tail from "@core/objects/Airplane/Airplane.Tail";
import Wing from "@core/objects/Airplane/Airplane.Wing";

declare type AirplanePart = Cockpit | Engine | Blades | Tail | Wing;

export default class Airplane {
    private partials: AirplanePart[];
    public mesh: Object3D = new Object3D();
    constructor() {
        const partialsClass = [ Cockpit, Engine, Blades, Tail, Wing ];
        this.partials = partialsClass.map($class => new $class(this.mesh));

        this.add(this.partials.map(part => part.mesh));
    }

    private add (meshes: Mesh[] | Object3D[] | Mesh | Object3D): void {
        !(Array.isArray(meshes)) && ( meshes = [ meshes ] );

        meshes.forEach(mesh => this.mesh.add(mesh));
    }
}