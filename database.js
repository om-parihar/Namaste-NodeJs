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

    // Insert
    const insertResults= await collection.insertMany([data]);
    console.log("Inserted documents=>",insertResults);

    // Filter
    const filteredDocs = await collection.find({ firstname: "Om" }).toArray();
    console.log('Found documents filtered by { firstname: "Om" } =>', filteredDocs);
    
    // Read
    const findResults=await collection.find({}).toArray();
    console.log("Found documents=>", findResults);

    // // Delete
    // const deleteResult = await collection.deleteMany({ lastname: "Kholi" });
    // console.log('Deleted documents =>', deleteResult);

    // Count
    const countResult = await collection.countDocuments({});
    console.log("Number of documents collection=>",countResult);

    return "done.";

}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());