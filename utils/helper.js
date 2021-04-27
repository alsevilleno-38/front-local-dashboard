export const simulateLatency = (cb, latency=1500) => {
    setTimeout(cb, latency);
}
export const capitalizeWord = word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}