import {
    HemisphereLight,
    DirectionalLight,
} from "three";

const hemisphereLight = new HemisphereLight(0xaaa, 0x000, .9);
const shadowLight = new DirectionalLight(0xfff, .9);
shadowLight.position.set(150, 350, 350);
shadowLight.castShadow = true;
shadowLight.shadow.camera.left = -400;
shadowLight.shadow.camera.right = 400;
shadowLight.shadow.camera.top = 400;
shadowLight.shadow.camera.near = 1;
shadowLight.shadow.camera.far = 1000;

shadowLight.shadow.mapSize.width = 2048;
shadowLight.shadow.mapSize.height= 2048;

export {
    hemisphereLight,
    shadowLight
}