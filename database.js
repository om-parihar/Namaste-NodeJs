const { MongoClient } = require("mongodb");

const url="mongodb+srv://talkshow372:Parihar1234@clusterpractise.6kw1jsn.mongodb.net/";

const client=new MongoClient(url);
const dbName="Test";

async function main(){
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to the server");
    const db=client.db(dbName);
    const collection=db.collection("User");

    const data={
        firstname: "King",
        lastname: "Kholi",
        city: "Mumbai",
        phonenumber: "124144235",
    };

    const insertResults= await collection.insertMany([data]);
    console.log("Inserted documents=>",insertResults);
    
    // Read
    const findResults=await collection.find({}).toArray();
    console.log("Found documents=>", findResults);

    return "done.";

}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());