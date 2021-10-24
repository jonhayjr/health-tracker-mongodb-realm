exports = async function(payload, response) {
    const id = payload.query.Id;
    let query = {"_id": BSON.ObjectId(id)}
    const collection = context.services.get("mongodb-atlas").db("health-db").collection("notes");
  collection.deleteOne(query)
  .then(result => console.log(`Deleted ${result.deletedCount} item.`))
  .catch(err => console.error(`Delete failed with error: ${err}`))
};