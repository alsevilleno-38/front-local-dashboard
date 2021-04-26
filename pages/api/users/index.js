import path from "path";
import fs from "fs";


export default (req, res, next) => {    
    if (req.method == "GET") {
        fs.readFile(
            path.join(process.env.PWD, "data", "users.json"),
            "utf8",
            (err, data) => {
                if (err) {
                    const errorMsg = `Something is wrong!\nDetails: ${err.message}`;
                    res.status(510).send(errorMsg);
                }
                else {
                    console.log(data);
                    res.setHeader("content-type", "application/json");
                    res.status(230).send(data);
                }
            }
        );
    }    
};
