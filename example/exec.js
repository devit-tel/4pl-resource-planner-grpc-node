const service = require("../src/coordinator_grpc_pb");
const message = require("../src/coordinator_pb");
const grpc = require("@grpc/grpc-js");

const c = new service.CoordinatorClient(
  "localhost:9080",
  grpc.credentials.createInsecure()
);

const r = new message.Rule();
r.setName("demo");
r.setScript("result = input");
r.setInput(
  JSON.stringify({
    hello: "eiei",
  })
);

c.exec(r, (err, result) => {
  if (!err) {
    console.log(result.toObject());
  }

  throw err;
});
