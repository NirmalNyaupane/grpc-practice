// package: server_streaming
// file: payment.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class PaymentRequest extends jspb.Message { 
    getCustomerId(): string;
    setCustomerId(value: string): PaymentRequest;
    getAmount(): string;
    setAmount(value: string): PaymentRequest;
    getCurrency(): string;
    setCurrency(value: string): PaymentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PaymentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PaymentRequest): PaymentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PaymentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PaymentRequest;
    static deserializeBinaryFromReader(message: PaymentRequest, reader: jspb.BinaryReader): PaymentRequest;
}

export namespace PaymentRequest {
    export type AsObject = {
        customerId: string,
        amount: string,
        currency: string,
    }
}

export class PaymentResponse extends jspb.Message { 
    getTransactionId(): string;
    setTransactionId(value: string): PaymentResponse;
    getStatus(): PaymentStatus;
    setStatus(value: PaymentStatus): PaymentResponse;
    getMessage(): string;
    setMessage(value: string): PaymentResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PaymentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PaymentResponse): PaymentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PaymentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PaymentResponse;
    static deserializeBinaryFromReader(message: PaymentResponse, reader: jspb.BinaryReader): PaymentResponse;
}

export namespace PaymentResponse {
    export type AsObject = {
        transactionId: string,
        status: PaymentStatus,
        message: string,
    }
}

export enum PaymentStatus {
    SUCCESS = 0,
    FAILED = 1,
}
