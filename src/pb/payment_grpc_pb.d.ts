// package: server_streaming
// file: payment.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as payment_pb from "./payment_pb";

interface IPaymentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    processPayment: IPaymentServiceService_IProcessPayment;
}

interface IPaymentServiceService_IProcessPayment extends grpc.MethodDefinition<payment_pb.PaymentRequest, payment_pb.PaymentResponse> {
    path: "/server_streaming.PaymentService/ProcessPayment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<payment_pb.PaymentRequest>;
    requestDeserialize: grpc.deserialize<payment_pb.PaymentRequest>;
    responseSerialize: grpc.serialize<payment_pb.PaymentResponse>;
    responseDeserialize: grpc.deserialize<payment_pb.PaymentResponse>;
}

export const PaymentServiceService: IPaymentServiceService;

export interface IPaymentServiceServer extends grpc.UntypedServiceImplementation {
    processPayment: grpc.handleUnaryCall<payment_pb.PaymentRequest, payment_pb.PaymentResponse>;
}

export interface IPaymentServiceClient {
    processPayment(request: payment_pb.PaymentRequest, callback: (error: grpc.ServiceError | null, response: payment_pb.PaymentResponse) => void): grpc.ClientUnaryCall;
    processPayment(request: payment_pb.PaymentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: payment_pb.PaymentResponse) => void): grpc.ClientUnaryCall;
    processPayment(request: payment_pb.PaymentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: payment_pb.PaymentResponse) => void): grpc.ClientUnaryCall;
}

export class PaymentServiceClient extends grpc.Client implements IPaymentServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public processPayment(request: payment_pb.PaymentRequest, callback: (error: grpc.ServiceError | null, response: payment_pb.PaymentResponse) => void): grpc.ClientUnaryCall;
    public processPayment(request: payment_pb.PaymentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: payment_pb.PaymentResponse) => void): grpc.ClientUnaryCall;
    public processPayment(request: payment_pb.PaymentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: payment_pb.PaymentResponse) => void): grpc.ClientUnaryCall;
}
