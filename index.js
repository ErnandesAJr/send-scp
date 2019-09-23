// var scp = require('scp');

// var options = {
//     file: 'mobitutils_v2.5_i386.deb',
//     user: 'replicant',
//     pass:'mobit#@',
//     host: '10.85.20.68',
//     port: '22',
//     path: '~'
// }

// scp.send(options, function (err) {
//     if (err) console.log(err);
//     else console.log('File transferred.');
// });

var client = require('scp2')

client.scp('mobitutils_v2.5_i386.deb', {
    host: '10.85.20.68',
    username: 'replicant',
    password: '@mobit#@',
    path: '/home/replicant'
}, function (err) { 
    console.log(err)
})