const parseResponse = (data, properties) => {
    if (typeof properties != 'object') {
        throw new TypeError('properties must be object')
    }
    let res = {};
    for (const [key, defaultValue] of Object.entries(properties)) {
        if (data && data.hasOwnProperty(key)) {
            if (data[key] && data[key].length !== 0) {
                res[key] = data[key];
            } else {
                res[key] = defaultValue;
            }
        } else {
            res[key] = defaultValue;
        }
    }
    return res;
};

export {parseResponse}