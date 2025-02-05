import { credentials } from "@grpc/grpc-js";
import { PaymentServiceClient } from '../../pb/payment_grpc_pb';
import { PaymentRequest } from "../../pb/payment_pb";

function main() {
  //creating a grpc client
  const client = new PaymentServiceClient("localhost:50051", credentials.createInsecure());
  const paymentRequest = new PaymentRequest();
  paymentRequest.setAmount("100");
  paymentRequest.setCurrency("USD");
  paymentRequest.setCustomerId("12345");

  client.processPayment(paymentRequest, (err, response) => {
        if (err) {
            console.error(err);
        } else {
            console.log(response);
        }
    });
}
main();
