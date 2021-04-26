import path from "path";
import fs from "fs";
import { simulateLatency } from "../../../utils/helper";

export default (req, res, next) => {
    if (req.method === 'GET') {
        fs.readFile(path.join(process.env.PWD, "data", "students.json"), "utf8", (err, data) => {
            if (err) {
                simulateLatency(() => {
                    res.status(400).send(err.message);
                })
                
            }
            else {
                res.setHeader("content-type", "application/json");
                simulateLatency(() => {
                    res.status(240).json(data);
                })
            }
        })
    }
}