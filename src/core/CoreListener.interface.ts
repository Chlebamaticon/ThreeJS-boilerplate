export default interface CoreListenerInterface {
    event: string,
    fn: Function,
    sourceProxy: any
};