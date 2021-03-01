```sh
curl -o /usr/local/bin/protoc-gen-grpc-web -L https://github.com/grpc/grpc-web/releases/download/1.2.1/protoc-gen-grpc-web-1.2.1-linux-x86_64
chmod 755 /usr/local/bin/protoc-gen-grpc-web
```

```sh
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"
OUT_DIR="./src"

protoc coordinator.proto \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
    --js_out=import_style=commonjs,binary:$OUT_DIR \
    --ts_out="service=grpc-node,mode=grpc-js:${OUT_DIR}" \
    --grpc_out="grpc_js:${OUT_DIR}"

```

### publish

```sh
npm run build
cp package.json dist
cp src/coordinator_pb.d.ts dist/coordinator_pb.d.ts
cd dist
npm publish
```
