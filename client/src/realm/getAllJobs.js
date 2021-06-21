// This function is the webhook's request handler.
exports = async function (payload, response) {
  const collection = context.services
    .get("mongodb-atlas")
    .db("jobsDB")
    .collection("jobs");

  let jobList = await collection.find().toArray();

  //convert objectId to string
  jobList.forEach((cl) => {
    cl._id = cl._id.toString();
  });

  return jobList;
};
