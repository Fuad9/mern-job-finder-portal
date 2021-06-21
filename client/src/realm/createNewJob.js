exports = function (payload, response) {
  var job = {};
  var result = {};

  if (payload.body) {
    job = EJSON.parse(payload.body.text());
    const date = new Date();

    console.log("parsed payload body", JSON.stringify(job));

    const collection = context.services
      .get("mongodb-atlas")
      .db("jobsDB")
      .collection("jobs");

    return collection.insertOne({ job, status: "Pending", date: date });
  }
  return result;
};
