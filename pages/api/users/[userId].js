import path from "path";
import fs from "fs";

const sendWithLatency = (cb, latency=1000) => {
    if (latency == 0) {
        cb();
    }
    else {
        setTimeout(() => {
            cb();
        }, latency)
    }
}

export default (req, res, next) => {   
    const id = req.query.userId;    
    if (req.method == "GET") {
        fs.readFile(
            path.join(process.env.PWD, "data", "users.json"),
            "utf8",
            (err, data) => {
                if (err) {
                    const errorMsg = `Something is wrong!\nDetails: ${err.message}`;
                    sendWithLatency(() => {
                        res.status(510).send(errorMsg);
                    })
                }

                else {
                    const dataObj = JSON.parse(data);
                    const dataCount = dataObj.length;
                    res.setHeader("content-type", "application/json");
                    if (id < dataCount) {
                        sendWithLatency(() => {
                            res.status(230).json(dataObj[id]);
                        })
                    }
                    else {
                        sendWithLatency(() => {
                            res.status(231).json(null);
                        })
                    }
                }
            }
        );
    }    
};
