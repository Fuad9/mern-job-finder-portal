exports = async function (payload, response) {
  if (payload.body) {
    const body = EJSON.parse(payload.body.text());
    const collection = context.services
      .get("mongodb-atlas")
      .db("jobsDB")
      .collection("jobs");
    const date = new Date();

    const updateResponse = await collection.updateOne(
      { _id: BSON.ObjectId(body.id) },
      { $set: { status: body.status, date: date } }
    );

    return updateResponse;
  }

  return {};
};
