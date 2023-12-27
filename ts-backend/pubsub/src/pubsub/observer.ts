export {}
type FnType = (data: Object) => void

const subscribers: Record<string, FnType[]> = {};

function subscribe(type: string, callback: () => void) {
    console.log('new subscriber for ' + type);
    if (!subscribers[type]) {
        subscribers[type] = [];
    }

    subscribers[type].push(callback);
}

function publish(type: string, data: Object) {
    console.log(type+' emitted');
    const currentSubscribers = subscribers[type];

    if (currentSubscribers) {
        for (let subscriber of currentSubscribers) {
            subscriber(data);
        }
    }
}

module.exports = {
    subscribe,
    publish
}