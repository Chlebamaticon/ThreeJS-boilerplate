import {
    Scene,
    Fog,
    Mesh, Object3D
} from "three";

export default class SceneController {
    public scene: Scene = new Scene();

    constructor () {
        this.scene.fog = new Fog(0xf7d9aa, 100, 950);
    }

    public add (meshes: Object3D[] | Mesh[] | Object3D | Mesh) {
        !(Array.isArray(meshes)) && (meshes = [ meshes ]);

        meshes.forEach(mesh => this.scene.add(mesh));
    }
}