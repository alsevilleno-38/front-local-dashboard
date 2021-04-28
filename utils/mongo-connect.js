import mongoDb from "mongodb";
import { getConnString } from "./get-config";
import {MONGO_DB} from "./conn-types";
console.log("mongo-connect")
export let client;
export const mongoConnect = () => {
    if (!client) {
        return new Promise(async (resolve, reject) => {
            let mongoClient = mongoDb.MongoClient;        
            const connString = await getConnString(MONGO_DB);
            try {
                client = await mongoClient.connect(connString, { useUnifiedTopology: true, useNewUrlParser: true })
                resolve(client);
            }
            catch (err) {
                console.log(err.message);
                reject(null);
            }
        })
    }    
}    

export default {
    mongoConnect, client
};
