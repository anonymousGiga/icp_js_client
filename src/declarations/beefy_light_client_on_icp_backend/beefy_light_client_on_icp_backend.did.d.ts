import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'complete_updating_state' : ActorMethod<
    [bigint],
    { 'Ok' : boolean } |
      { 'Err' : string }
  >,
  'public_key' : ActorMethod<
    [],
    { 'Ok' : { 'public_key' : Uint8Array } } |
      { 'Err' : string }
  >,
  'set_client' : ActorMethod<
    [string, Array<string>],
    { 'Ok' : boolean } |
      { 'Err' : string }
  >,
  'sign' : ActorMethod<
    [Uint8Array],
    { 'Ok' : { 'signature' : Uint8Array } } |
      { 'Err' : string }
  >,
  'sign_messages' : ActorMethod<
    [Uint8Array],
    { 'Ok' : { 'signature' : Uint8Array } } |
      { 'Err' : string }
  >,
  'start_updating_state' : ActorMethod<
    [Uint8Array],
    { 'Ok' : null } |
      { 'Err' : string }
  >,
  'test_beefy' : ActorMethod<
    [],
    { 'Ok' : { 'signature' : Uint8Array } } |
      { 'Err' : string }
  >,
  'update_state' : ActorMethod<
    [Uint8Array],
    { 'Ok' : null } |
      { 'Err' : string }
  >,
}
