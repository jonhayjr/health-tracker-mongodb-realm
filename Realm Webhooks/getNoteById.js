exports = async function(payload, response) {
    const id = payload.query.Id;
    let query = {"_id": BSON.ObjectId(id)};
    const collection = context.services.get("mongodb-atlas").db("health-db").collection("notes");
    const note = await collection.findOne(query);
    return note;
};