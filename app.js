'use strict';

/*

MIT License

Copyright (c) 2019 mY9Yd2 <github-username>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

// TODO: fix this
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const WebSocket = require('ws');
const ws = new WebSocket('wss://spooky.ncore.cc:3001/spooky');

ws.on('open', function () {
    console.log('WebSocket is open now.');
});

ws.on('message', function (m) {
    var x = JSON.parse(m);

    switch (x.type) {
        case 'spooky':
            var currdatetime = new Date();
            console.log('\n' + currdatetime.toLocaleString());

            if (x.recaptcha) {
                console.log('### RECAPTCHA ###\nID: ' + x.eventid);
                break;
            }

            console.log('### INFO ###\nID: ' + x.eventid);

            var a = {
                eventid: x.eventid,
                userid: process.env['USERID']
            };

            ws.send(JSON.stringify(a));
            break;

        case 'spooky-event':
            console.log(x.text);
            break;
    }
});

// NOTE: NOT TESTED
ws.on('error', function (err) {
    console.error(err);
    process.exit();
});

// TODO: reconnect?
ws.on('close', function () {
    console.log('Disconnected.');
    process.exit();
});
