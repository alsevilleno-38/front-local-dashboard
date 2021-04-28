import axios from "axios";
export default async (req, res, next) => {
    if (req.method == "GET") {
        const result = await axios.post("http://127.0.0.1:5500/test");
        console.log(result.data);
        res.status(202).json(result.data);
    }
}