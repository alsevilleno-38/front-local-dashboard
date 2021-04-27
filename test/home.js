const obj = {name: "mod"};
function home() {
    return obj;
}

const init = async () => {
    await home();
}
init();
console.log("10");