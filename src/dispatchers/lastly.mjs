import {isFuture} from '../core.mjs';
import {partial1} from '../internal/fn.mjs';
import {throwInvalidFuture} from '../internal/throw.mjs';

function lastly$right(right, left){
  if(!isFuture(left)) throwInvalidFuture('Future.finally', 1, left);
  return left.finally(right);
}

export function lastly(right, left){
  if(!isFuture(right)) throwInvalidFuture('Future.finally', 0, right);
  if(arguments.length === 1) return partial1(lastly$right, right);
  return lastly$right(right, left);
}