import { default as Core } from "@core";

const container = document.getElementById("app");

const WebGLApp = new Core(container);

WebGLApp.onInit = (...args: any[]) => {
    const [ core, { listeners, container } ] = args;

    core.listener = {
        event: 'resize',
        fn: console.log,
        sourceProxy: window
    };
};
WebGLApp.run();

setTimeout(() => {
    console.log("Destroying process");
    WebGLApp.stop();
}, 6000);