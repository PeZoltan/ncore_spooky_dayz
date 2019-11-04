## Usage:

**NOTE:** replace 000000 with your userid.

In firefox:
"View Page Source" -> ctrl+f -> id="confg" -> data-uid="000000" copy the number

#### Docker

```bash
$ docker build -t username/ncore-spooky .
$ docker run -e USERID=000000 -d username/ncore-spooky
```

#### Without docker

Install Node.js

```bash
$ npm install
$ USERID=000000 node app.js
```
