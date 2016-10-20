'use strict';

const Hero = function Hero(name, alias, power) {
  this.name = name;
  this.alias = alias;
  this._power = power;
};

Hero.prototype.usePower = function () {
  return this._power;
};


module.exports = Hero;
