'use strict';

const methods = iface =>
  Object.entries(iface)
    .filter(([_, v]) => typeof v === 'function')
    .map(([k, v]) => [k, v.length]);

const iface = {
  m1: x => [x],
  m2(x, y) { return [x, y]; },
  m3(x, y, z) { return [x, y, z]; },
  name: 'test'
};

console.log(methods(iface));

module.exports = { methods };
