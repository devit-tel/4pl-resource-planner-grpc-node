// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var coordinator_pb = require('./coordinator_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_coordinator_ExecResult(arg) {
  if (!(arg instanceof coordinator_pb.ExecResult)) {
    throw new Error('Expected argument of type coordinator.ExecResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coordinator_ExecResult(buffer_arg) {
  return coordinator_pb.ExecResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coordinator_IntList(arg) {
  if (!(arg instanceof coordinator_pb.IntList)) {
    throw new Error('Expected argument of type coordinator.IntList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coordinator_IntList(buffer_arg) {
  return coordinator_pb.IntList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coordinator_OptimizeRule(arg) {
  if (!(arg instanceof coordinator_pb.OptimizeRule)) {
    throw new Error('Expected argument of type coordinator.OptimizeRule');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coordinator_OptimizeRule(buffer_arg) {
  return coordinator_pb.OptimizeRule.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coordinator_Rule(arg) {
  if (!(arg instanceof coordinator_pb.Rule)) {
    throw new Error('Expected argument of type coordinator.Rule');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coordinator_Rule(buffer_arg) {
  return coordinator_pb.Rule.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coordinator_RulesList(arg) {
  if (!(arg instanceof coordinator_pb.RulesList)) {
    throw new Error('Expected argument of type coordinator.RulesList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coordinator_RulesList(buffer_arg) {
  return coordinator_pb.RulesList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var CoordinatorService = exports.CoordinatorService = {
  setExecRule: {
    path: '/coordinator.Coordinator/SetExecRule',
    requestStream: false,
    responseStream: false,
    requestType: coordinator_pb.Rule,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_coordinator_Rule,
    requestDeserialize: deserialize_coordinator_Rule,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getExecRuleByName: {
    path: '/coordinator.Coordinator/GetExecRuleByName',
    requestStream: false,
    responseStream: false,
    requestType: coordinator_pb.Rule,
    responseType: coordinator_pb.Rule,
    requestSerialize: serialize_coordinator_Rule,
    requestDeserialize: deserialize_coordinator_Rule,
    responseSerialize: serialize_coordinator_Rule,
    responseDeserialize: deserialize_coordinator_Rule,
  },
  listExecRule: {
    path: '/coordinator.Coordinator/ListExecRule',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: coordinator_pb.RulesList,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_coordinator_RulesList,
    responseDeserialize: deserialize_coordinator_RulesList,
  },
  deleteExecRule: {
    path: '/coordinator.Coordinator/DeleteExecRule',
    requestStream: false,
    responseStream: false,
    requestType: coordinator_pb.Rule,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_coordinator_Rule,
    requestDeserialize: deserialize_coordinator_Rule,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Search for candidates that matched the given criteria
exec: {
    path: '/coordinator.Coordinator/Exec',
    requestStream: false,
    responseStream: false,
    requestType: coordinator_pb.Rule,
    responseType: coordinator_pb.ExecResult,
    requestSerialize: serialize_coordinator_Rule,
    requestDeserialize: deserialize_coordinator_Rule,
    responseSerialize: serialize_coordinator_ExecResult,
    responseDeserialize: deserialize_coordinator_ExecResult,
  },
  scoutThenOptimize: {
    path: '/coordinator.Coordinator/ScoutThenOptimize',
    requestStream: false,
    responseStream: false,
    requestType: coordinator_pb.OptimizeRule,
    responseType: coordinator_pb.IntList,
    requestSerialize: serialize_coordinator_OptimizeRule,
    requestDeserialize: deserialize_coordinator_OptimizeRule,
    responseSerialize: serialize_coordinator_IntList,
    responseDeserialize: deserialize_coordinator_IntList,
  },
};

exports.CoordinatorClient = grpc.makeGenericClientConstructor(CoordinatorService);
