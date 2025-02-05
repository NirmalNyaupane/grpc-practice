import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from "@grpc/grpc-js";
import { PaymentServiceService } from "../../pb/payment_grpc_pb";
import {
  PaymentRequest,
  PaymentResponse,
  PaymentStatus,
} from "../../pb/payment_pb";

function paymentService(
  call: ServerUnaryCall<PaymentRequest, PaymentResponse>,
  callBack: sendUnaryData<PaymentResponse>
) {
  const amount = call.request.getAmount();
  const currency = call.request.getCurrency();
  const response = new PaymentResponse();

  //generate random number
  const randomNumber = Math.floor(Math.random() * 100000);
  response.setTransactionId(randomNumber.toString());
  response.setStatus(PaymentStatus.SUCCESS);
  response.setMessage(`Payment of ${amount} ${currency} successful`);

  callBack(null, response);
}

function main() {
  //creating a grpc server
  const server = new Server();
  server.addService(PaymentServiceService, {
    processPayment: paymentService,
  });

  server.bindAsync(
    "0.0.0.0:50051",
    ServerCredentials.createInsecure(),
    (err, port) => {
        if(err) {
            console.error(err);
        } else {
            console.log(`Server listening on port ${port}`);
        }
    }
  );
}

main();
