// GENERATED CODE -- DO NOT EDIT!

// package: coordinator
// file: coordinator.proto

import * as coordinator_pb from "./coordinator_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface ICoordinatorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  setExecRule: grpc.MethodDefinition<coordinator_pb.Rule, google_protobuf_empty_pb.Empty>;
  getExecRuleByName: grpc.MethodDefinition<coordinator_pb.Rule, coordinator_pb.Rule>;
  listExecRule: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, coordinator_pb.RulesList>;
  deleteExecRule: grpc.MethodDefinition<coordinator_pb.Rule, google_protobuf_empty_pb.Empty>;
  exec: grpc.MethodDefinition<coordinator_pb.Rule, coordinator_pb.ExecResult>;
  scoutThenOptimize: grpc.MethodDefinition<coordinator_pb.OptimizeRule, coordinator_pb.IntList>;
}

export const CoordinatorService: ICoordinatorService;

export interface ICoordinatorServer extends grpc.UntypedServiceImplementation {
  setExecRule: grpc.handleUnaryCall<coordinator_pb.Rule, google_protobuf_empty_pb.Empty>;
  getExecRuleByName: grpc.handleUnaryCall<coordinator_pb.Rule, coordinator_pb.Rule>;
  listExecRule: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, coordinator_pb.RulesList>;
  deleteExecRule: grpc.handleUnaryCall<coordinator_pb.Rule, google_protobuf_empty_pb.Empty>;
  exec: grpc.handleUnaryCall<coordinator_pb.Rule, coordinator_pb.ExecResult>;
  scoutThenOptimize: grpc.handleUnaryCall<coordinator_pb.OptimizeRule, coordinator_pb.IntList>;
}

export class CoordinatorClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  setExecRule(argument: coordinator_pb.Rule, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  setExecRule(argument: coordinator_pb.Rule, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  setExecRule(argument: coordinator_pb.Rule, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getExecRuleByName(argument: coordinator_pb.Rule, callback: grpc.requestCallback<coordinator_pb.Rule>): grpc.ClientUnaryCall;
  getExecRuleByName(argument: coordinator_pb.Rule, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<coordinator_pb.Rule>): grpc.ClientUnaryCall;
  getExecRuleByName(argument: coordinator_pb.Rule, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<coordinator_pb.Rule>): grpc.ClientUnaryCall;
  listExecRule(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<coordinator_pb.RulesList>): grpc.ClientUnaryCall;
  listExecRule(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<coordinator_pb.RulesList>): grpc.ClientUnaryCall;
  listExecRule(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<coordinator_pb.RulesList>): grpc.ClientUnaryCall;
  deleteExecRule(argument: coordinator_pb.Rule, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteExecRule(argument: coordinator_pb.Rule, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteExecRule(argument: coordinator_pb.Rule, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  exec(argument: coordinator_pb.Rule, callback: grpc.requestCallback<coordinator_pb.ExecResult>): grpc.ClientUnaryCall;
  exec(argument: coordinator_pb.Rule, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<coordinator_pb.ExecResult>): grpc.ClientUnaryCall;
  exec(argument: coordinator_pb.Rule, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<coordinator_pb.ExecResult>): grpc.ClientUnaryCall;
  scoutThenOptimize(argument: coordinator_pb.OptimizeRule, callback: grpc.requestCallback<coordinator_pb.IntList>): grpc.ClientUnaryCall;
  scoutThenOptimize(argument: coordinator_pb.OptimizeRule, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<coordinator_pb.IntList>): grpc.ClientUnaryCall;
  scoutThenOptimize(argument: coordinator_pb.OptimizeRule, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<coordinator_pb.IntList>): grpc.ClientUnaryCall;
}
