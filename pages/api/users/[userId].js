import path from "path";
import fs from "fs";


export default (req, res, next) => {            
    const id = req.query.userId;    
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
                    const dataObj = JSON.parse(data);
                    const dataCount = dataObj.length;
                    res.setHeader("content-type", "application/json");
                    if (id < dataCount) {                        
                        res.status(230).json(dataObj[id]);
                    }
                    else {
                        res.status(231).json(null);
                    }
                }
            }
        );
    }    
};
