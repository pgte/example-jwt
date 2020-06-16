# JWT example

## Install

```
$ npm install
```

## Generate key

```bash
$ ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
$ openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub
```

## Example sign and verify signature

```
$ node sign.js
```