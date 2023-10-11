/**
 * @fileoverview gRPC-Web generated client stub for server
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.21.12
// source: example.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.server = require('./example_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.server.GreeterServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.server.GreeterServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.server.HelloRequest,
 *   !proto.server.HelloResponse>}
 */
const methodDescriptor_GreeterService_sayHello = new grpc.web.MethodDescriptor(
  '/server.GreeterService/sayHello',
  grpc.web.MethodType.UNARY,
  proto.server.HelloRequest,
  proto.server.HelloResponse,
  /**
   * @param {!proto.server.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.server.HelloResponse.deserializeBinary
);


/**
 * @param {!proto.server.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.server.HelloResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.server.HelloResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.server.GreeterServiceClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/server.GreeterService/sayHello',
      request,
      metadata || {},
      methodDescriptor_GreeterService_sayHello,
      callback);
};


/**
 * @param {!proto.server.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.server.HelloResponse>}
 *     Promise that resolves to the response
 */
proto.server.GreeterServicePromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/server.GreeterService/sayHello',
      request,
      metadata || {},
      methodDescriptor_GreeterService_sayHello);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.server.HelloRequest,
 *   !proto.server.HelloResponse>}
 */
const methodDescriptor_GreeterService_sayHelloAgain = new grpc.web.MethodDescriptor(
  '/server.GreeterService/sayHelloAgain',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.server.HelloRequest,
  proto.server.HelloResponse,
  /**
   * @param {!proto.server.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.server.HelloResponse.deserializeBinary
);


/**
 * @param {!proto.server.HelloRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.server.HelloResponse>}
 *     The XHR Node Readable Stream
 */
proto.server.GreeterServiceClient.prototype.sayHelloAgain =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/server.GreeterService/sayHelloAgain',
      request,
      metadata || {},
      methodDescriptor_GreeterService_sayHelloAgain);
};


/**
 * @param {!proto.server.HelloRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.server.HelloResponse>}
 *     The XHR Node Readable Stream
 */
proto.server.GreeterServicePromiseClient.prototype.sayHelloAgain =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/server.GreeterService/sayHelloAgain',
      request,
      metadata || {},
      methodDescriptor_GreeterService_sayHelloAgain);
};


module.exports = proto.server;

