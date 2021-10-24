exports = async function(payload, response) {
    const body = JSON.parse(payload.body.text())
    const newItem = {
    "date": new Date(body.date) || '',
    "diet": body.diet || '',
    "mood": body.mood || '',
    "symptoms": body.symptoms || '',
    "exercise": body.exercise || ''
  };


    const collection = context.services.get("mongodb-atlas").db("health-db").collection("notes");
  return collection.insertOne(newItem)
  .then(result => console.log(`Successfully inserted item with _id: ${result.insertedId}`))
  .catch(err => console.error(`Failed to insert item: ${err}`))
};