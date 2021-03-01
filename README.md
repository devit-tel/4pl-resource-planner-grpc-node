```javascript
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
```

```sh
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"
OUT_DIR="."

protoc coordinator.proto \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
    --js_out=import_style=commonjs,binary:$OUT_DIR \
    --ts_out="service=grpc-node,mode=grpc-js:${OUT_DIR}" \
    --grpc_out="grpc_js:${OUT_DIR}"
```
