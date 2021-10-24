exports = async function(payload, response) {
    const collection = context.services.get("mongodb-atlas").db("health-db").collection("notes");
   const notes = await collection.find().toArray();
    return notes;
 };
 