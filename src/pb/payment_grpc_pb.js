// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var payment_pb = require('./payment_pb.js');

function serialize_server_streaming_PaymentRequest(arg) {
  if (!(arg instanceof payment_pb.PaymentRequest)) {
    throw new Error('Expected argument of type server_streaming.PaymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_server_streaming_PaymentRequest(buffer_arg) {
  return payment_pb.PaymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_server_streaming_PaymentResponse(arg) {
  if (!(arg instanceof payment_pb.PaymentResponse)) {
    throw new Error('Expected argument of type server_streaming.PaymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_server_streaming_PaymentResponse(buffer_arg) {
  return payment_pb.PaymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PaymentServiceService = exports.PaymentServiceService = {
  processPayment: {
    path: '/server_streaming.PaymentService/ProcessPayment',
    requestStream: false,
    responseStream: false,
    requestType: payment_pb.PaymentRequest,
    responseType: payment_pb.PaymentResponse,
    requestSerialize: serialize_server_streaming_PaymentRequest,
    requestDeserialize: deserialize_server_streaming_PaymentRequest,
    responseSerialize: serialize_server_streaming_PaymentResponse,
    responseDeserialize: deserialize_server_streaming_PaymentResponse,
  },
};

exports.PaymentServiceClient = grpc.makeGenericClientConstructor(PaymentServiceService);
