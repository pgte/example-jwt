'use strict'

const jwt = require('jsonwebtoken')
const fs = require('fs')

const privateKey = fs.readFileSync('./jwtRS256.key')

const options = {
  algorithm: 'RS256',
  expiresIn: '1 day',
  audience: 'madeira.best',
  issuer: 'madeirasafe.com'
}

const payload = {
  nonce: 'somerandomstringcatwalk',
  class_id: 1
}

const token = jwt.sign(payload, privateKey, options)

console.log(token)

const publicKey = fs.readFileSync('./jwtRS256.key.pub')

const decoded = jwt.verify(token, publicKey, {
  algorithms: ['RS256'],
  issuer: 'madeirasafe.com',
  audience: 'madeira.best'
})

console.log(decoded)