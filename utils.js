//convert object to map
const objToMap = ( obj => {
    const mp = new Map;
    Object.keys ( obj ). forEach (k => { mp.set(k, obj[k]) });
    return mp;
});

function urlToName(url) {
    return url.substring(78, 98);
}