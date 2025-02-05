//Unary RPC calls are the basic Request/Response
//The client will send one message to the srver and will receive one response from the server
//Unary Rpc calls will be the most common for your apis
//Unary calls are very well suited when your data is small
// start wit unary when writting apis nd use streaming Api if performace is an issue.
// Unary calls are also very well suited when your data is small and you want to send a single message to the server and receive a single response from the server

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
function sayHello(call, callback) {
  const name = call.request.first_name;
  callback(null, { message: `Hello, ${name}!` });
}
function main() {
  console.log(greetProto, "this is a greet proto");
  const server = new grpc.Server();

  server.addService(greetProto.GreetService.service, { Greet:sayHello });

  // Bind and start the server
  server.bindAsync(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error("Failed to bind server:", err);
        return;
      }
      console.log(`Server running at http://0.0.0.0:${port}`);
    }
  );
}
main();
