import {
    Light,
    HemisphereLight,
    DirectionalLight
} from "three";

import SceneController from "@core/controllers/Scene.controller";

declare type Lighting = Light | HemisphereLight | DirectionalLight;
declare type LightingMap = Map<string, Lighting>;

export default class LightsController {
    private scene: any;
    private lightings: LightingMap = new Map();
    constructor(scene: SceneController, ...lights: Lighting[]) {
        this.scene = new Proxy(scene, {});
        this.scene.add(lights);
    }
}