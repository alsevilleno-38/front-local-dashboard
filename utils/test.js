const method = async () => {
    // const result = await new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(true);
    //     }, 2000)
    // });
    return 200;
}

const a = await method();
console.log(a);
console.log("beyond");