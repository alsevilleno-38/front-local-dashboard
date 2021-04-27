import path from "path";
import fs from "fs";
import connTypes from "../../../utils/conn-types";
import { connectDb, client } from "../../../utils/connect-db";

export default async (req, res, next) => {
    if (!client) {
        client = await connectDb(connTypes.MONGO_DB);
    }
    else {
        if (req.method == "GET") {
            client.db("testing").collection("default").insertOne({ name: "default" });
            res.status(250).send("done");
        }    
    }
};
