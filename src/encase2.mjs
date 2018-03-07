import {Core} from './core.mjs';
import {noop, show, showf, partial1, partial2} from './internal/fn.mjs';
import {isFunction} from './internal/is.mjs';
import {throwInvalidArgument} from './internal/throw.mjs';

export function Encase2(fn, a, b){
  this._fn = fn;
  this._a = a;
  this._b = b;
}

Encase2.prototype = Object.create(Core);

Encase2.prototype._interpret = function Encase2$interpret(rec, rej, res){
  var r;
  try{ r = this._fn(this._a, this._b) }catch(e){ rej(e); return noop }
  res(r);
  return noop;
};

Encase2.prototype.toString = function Encase2$toString(){
  return 'Future.encase2(' + showf(this._fn) + ', ' + show(this._a) + ', ' + show(this._b) + ')';
};

export function encase2(f, x, y){
  if(!isFunction(f)) throwInvalidArgument('Future.encase2', 0, 'be a function', f);

  switch(arguments.length){
    case 1: return partial1(encase2, f);
    case 2: return partial2(encase2, f, x);
    default: return new Encase2(f, x, y);
  }
}