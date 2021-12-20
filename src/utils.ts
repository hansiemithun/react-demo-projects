export const later = (delay: number, value: number) => {
    let timer:any = 0;
    let reject: any = null;
    const promise = new Promise((resolve, _reject) => {
        reject = _reject;
        timer = setTimeout(resolve, delay, value);
    });
    return {
        get promise() { return promise; },
        cancel() {
            if (timer) {
                clearTimeout(timer);
                timer = 0;
                reject();
                reject = null;
            }
        }
    };
};
