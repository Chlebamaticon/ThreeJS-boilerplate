import {
    Camera,
    PerspectiveCamera,
    Vector3
} from "three";

export default class CameraController {
    public camera: PerspectiveCamera;
    constructor ({ fov, aratio, nplane, fplane }: any) {
        this.camera = new PerspectiveCamera(
            fov,
            aratio,
            nplane,
            fplane
        );
    }

    public position (pos: Vector3): void {
        this.camera
            .position = pos;
    }

    public move (vec: Vector3): void {
        this.camera
            .position
            .add(vec);
    }

    set aspect (set: number) {
        this.camera.aspect = set;
        this.camera.updateProjectionMatrix();
    };
}