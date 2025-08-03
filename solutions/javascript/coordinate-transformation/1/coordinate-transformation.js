export function translate2d(dx, dy) {
  return function(x, y){
    return [x + dx, y + dy];
  };
}

export function scale2d(sx, sy) {
  return function(x, y){
    return [x * sx, y * sy];
  };
}

export function composeTransform(f, g) {
  return function(x, y) {
    return g(f(x, y)[0], f(x, y)[1]);
  }
}

export function memoizeTransform(f) {
  let lastArgs = null;
  let lastResult = null;

  return function (...args) {
    if (lastArgs && args[0] === lastArgs[0] && args[1] === lastArgs[1]) {
      return lastResult;
    }
    lastArgs = args;
    lastResult = f(...args);
    return lastResult;
  }
}
