await new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true);
    }, 2000)
})
console.log("test");