import {
    CameraController,
    SceneController,
    RendererController,
    LightsController
} from "@core/controllers";
import CoreListenerInterface from "@core/CoreListener.interface";

export default class Core {
    private cameraController: CameraController;
    private lightsController: LightsController;
    private rendererController: RendererController;
    private sceneController: SceneController;

    private _container: HTMLElement;
    private _listeners: CoreListenerInterface[] = [];

    public _onInit: Function;

    private set container(element: HTMLElement) {
        this._container = element;
    }

    public set listener(listener: CoreListenerInterface) {
        this._listeners.push(listener);
    }

    public set onInit(fn: Function) {
        this._onInit = fn;
    }

    constructor(container: HTMLElement | null) {
        try {
            if (!container)
                throw new Error("Incorrect container, might be not found.");

            this.container = container;
        } catch (e) {
            console.error(e.message);
        }
    }

    private init (): void {
        (this._onInit instanceof Function) && this._onInit(new Proxy(this, {}), {
            listeners: this._listeners,
            container: this._container
        });

        this._listeners.forEach(listener => {
           const { sourceProxy, fn, event } = listener;
           sourceProxy.addEventListener(event, fn, false);
        });
    }

    public run (): void {
        this.init();
    }

    public stop (): void {
        this._listeners.forEach(listener => {
            const { sourceProxy, fn, event } = listener;
            sourceProxy.removeEventListener(event, fn);
        });
    }
}