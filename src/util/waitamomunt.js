function setTimeoutExample(callback, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            callback();
            resolve();
        }, delay);
    });
}

export default setTimeoutExample;






