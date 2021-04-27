import path from "path";
import fs from "fs";
import { simulateLatency } from "../../../utils/helper";
import { mongoConnect } from "../../../utils/mongo-connect";

export default async (req, res, next) => {
    const client = await mongoConnect();
    console.log("mongodb connected");
    console.log("router");
    
    if (req.method === 'GET') {
        let latency = 1000
        try {
            const cursor = client.db("testing").collection("default").find({}).limit(2);
            let data = [];
            await cursor.forEach(d => {
                data.push(d);
            })
            data = data.map(d => {
                return {
                    name: d.name,
                    age: d.age,
                    hobbies: d.hobbies                
                }
            });

            console.log(data);
            res.setHeader("content-type", "application/json");
            simulateLatency(async () => {
                await client.close();
                res.status(240).json(data);
            }, latency)
            
        }
        catch (err) {
            simulateLatency(async () => {
                await client.close();
                res.status(400).send(err.message);
            }, latency)
        }        
    }
}