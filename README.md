## Usage:

**NOTE:** replace 000000 with your userid and ffffffffffffffffffffffffffffffff with your unique key.

In firefox:
UID: "View Page Source" -> ctrl+f -> id="confg" -> data-uid="000000" copy the number
UNIQUE: "View Page Source" -> ctrl+f -> id="confg" -> data-unique="ffffffffffffffffffffffffffffffff" copy the key

#### Docker

```bash
$ docker build -t username/ncore-spooky .
$ docker run -e USERID=000000 UNIQUE=ffffffffffffffffffffffffffffffff -d username/ncore-spooky
```

#### Without docker

Install Node.js

```bash
$ npm install
$ USERID=000000 UNIQUE=ffffffffffffffffffffffffffffffff node app.js
```
