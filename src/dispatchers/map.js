import Z from 'sanctuary-type-classes';
import {partial1} from '../internal/fn';
import {isFunction} from '../internal/is';
import {throwInvalidArgument} from '../internal/throw';

function map$mapper(mapper, m){
  if(!Z.Functor.test(m)) throwInvalidArgument('Future.map', 1, 'be a Functor', m);
  return Z.map(mapper, m);
}

export function map(mapper, m){
  if(!isFunction(mapper)) throwInvalidArgument('Future.map', 0, 'be a Function', mapper);
  if(arguments.length === 1) return partial1(map$mapper, mapper);
  return map$mapper(mapper, m);
}
