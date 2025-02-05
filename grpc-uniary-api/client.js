const protoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");
const PROTO_PATH = __dirname + "/protos/greet.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const greetProto = grpc.loadPackageDefinition(packageDefinition).greet;

function main() {
  const client = new greetProto.GreetService(
    "localhost:50051",
    grpc.credentials.createInsecure()
  );

  client.Greet(
    {
      first_name: "Nirmal",
      last_name: "Neupane",
    },
    (error, response) => {
      console.log(error);
      console.log(response);
    }
  );
}

main();
