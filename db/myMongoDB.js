import { MongoClient } from "mongodb";

function MyMongoDB() {
  const myDB = {};
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";

  function connect() {
    const client = new MongoClient(uri);
    const db = client.db("photoSharing");
    return { client, db };
  }

  myDB.getPhotos = async function ({ query = "", limit = 20 } = {}) {
    const { client, db } = connect();
    const queryObj = { caption: { $regex: `${query}`, $options: "i" } };
    console.log("query photos", query, queryObj);
    try {
      const photos = await db
        .collection("photos")
        .find(queryObj)
        .limit(limit)
        .toArray();

      return photos;
    } finally {
      await client.close();
    }
  };

  myDB.insertUser = async function (user) {
    const { client, db } = connect();

    console.log("insert User", user.username);
    try {
      const response = await db.collection("users").insertOne(user);

      return response;
    } finally {
      await client.close();
    }
  };

  myDB.getUserByUsername = async function (username) {
    const { client, db } = connect();

    console.log("get User", username);
    try {
      return await db.collection("users").findOne({ username });
    } finally {
      await client.close();
    }
  };
  return myDB;
}

const myDB = MyMongoDB();

export default myDB;
