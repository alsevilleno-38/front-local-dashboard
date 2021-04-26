export const simulateLatency = (cb, latency=1500) => {
    setTimeout(cb, latency);
}

