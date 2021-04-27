import { getConnString } from "./get-config";
import connTypes from "./conn-types";
import mongoDb from "mongodb";
export let client;
export const connectDb = (conn_type) => {
    return new Promise(async (resolve, reject) => {
        let mongoClient = mongoDb.MongoClient;        
        const connString = await getConnString(conn_type);
        try {
            const client = await mongoClient.connect(connString, { useUnifiedTopology: true, useNewUrlParser: true })
            resolve(client);
        }
        catch (err) {
            console.log(err.message);
            reject(null);
        }
    })

}    
export default {
    connectDb,
    client
};
