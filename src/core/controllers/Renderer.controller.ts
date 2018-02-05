import {
    WebGLRenderer,
    WebGLRendererParameters
} from "three";
import SceneController from "@core/controllers/Scene.controller";
import CameraController from "@core/controllers/Camera.controller";

export default class RendererController {
    public renderer: WebGLRenderer;
    constructor ({ width, height }:any, options: WebGLRendererParameters) {
        this.renderer = new WebGLRenderer(options);
        this.renderer.setSize(width, height);
        this.renderer.shadowMap.enabled = true;
    }

    public setSize (width: number, height: number): void {
        this.renderer.setSize(width, height);
    }

    public mount (destination: HTMLElement | null): void {
        if (destination)
            destination
                .appendChild(this.renderer.domElement);
    }

    public render (sceneCtrl: SceneController, cameraCtrl: CameraController): void {
        console.log('render', sceneCtrl.scene, cameraCtrl.camera);
        this.renderer.render(sceneCtrl.scene, cameraCtrl.camera);
    }

    public initLoop(callback: Function): void {
        console.log('render', this.renderer);
        callback(this.renderer);
        // const self = () => {
        //     callback(this.renderer);
        //
        //     requestAnimationFrame(self);
        // };
        //
        // self();
    }
}