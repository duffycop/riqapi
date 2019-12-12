'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = '11235813';

function createToken(user){
  var payload = {
    sub: user._id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    role: user.role,
    image: user.image,
    iat: moment().unix(),
    exp: moment().add(10, 'days').unix
  }

  return jwt.encode(payload, secret);
}

function deleteToken(user){
  var payload = {
    sub: user._id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    role: user.role,
    image: user.image,
    iat: moment().unix(),
    exp: moment().subtract(10, 'days').unix
  }
}

module.exports = {
  createToken,
  deleteToken
};