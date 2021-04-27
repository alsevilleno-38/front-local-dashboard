let counter = {
    num: 0
};
export const num1 = 100;
export const num2 = 200;
export const media = (info=counter) => {
    console.log(counter == info);
}
export const display = (info) => {
    info.num++;
}
export const laptop = () => {
    console.log(counter);
}
export default counter;

