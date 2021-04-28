import { mongoConnect, client } from "../../../utils/mongo-connect";

export default async (req, res, next) => {
    const t0 = performance.now();
    let tf;
    await mongoConnect();
    
    if (req.method === 'POST') {
        tf = performance.now();
        console.log(tf - t0);
        res.status(210).json({ isValid: true, time: tf - t0 });
    }
    else if (req.method == "GET") {
        tf = performance.now();
        console.log(tf - t0);
        res.status(215).send(send);
    }
}