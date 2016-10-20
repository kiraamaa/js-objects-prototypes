'use strict';

const User = function (name, email) {
  this.name = name;
  this.email = email;
  this.runs = [];
};

const Run = function (date, distance, timeTaken) {
    this.date = date;
    this.distance = distance;
    this.timeTaken = timeTaken;
  };



  User.prototype.totalDistance = function () {
    let runs = this.runs;
    let total = 0;
    for (let i = 0; i < runs.length; i++) {
      total += runs[i].distance;
    }

    return total;
  };

  User.prototype.longestRun = function () {
    let runs = this.runs;
    let longest = 0;

    for (let i = 0; i < runs.length; i++) {
      if (runs[i].distance > longest) {
        longest = runs[i].distance;
      }
    }

    return longest;
  };

  User.prototype.totalTime = function () {
    let runs = this.runs;
    let total = 0;

    for (let i = 0; i < runs.length; i++) {
      total += runs[i].timeTaken;
    }

    return total;
  };

  User.prototype.averageSpeed = function () {
    return this.totalDistance() / this.totalTime();
  };

  /* User.protoype.averageDistance = function () {
    let runs = this.runs;

    return this.totalDistance() / runs.length;
  } */





module.exports = {
  Run,
  User,
};


// In node, use like so:
//
//    const runTracker = require('./lib/runs');
//    let mcFace = new runTracker.User('Person McFace', 'wdi@personmcface.com');
