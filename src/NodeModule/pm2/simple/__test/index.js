// const PATH = require('path')
// const pm2 = require('pm2')




// const pm2Config = {
//     script: PATH.resolve(__dirname, './app.js'),
//     exec_mode: 'cluster',
//     instances: 1,
//     max_memory_restart: '100M',
// }

// pm2.connect( err => {
//     if (err) {
//         console.log(err)
//         process.exit()
//     }

//     const pm2ConfigCallback = (err, apps) => {
//         pm2.disconnect()
//         if (err) { throw err }
//     }

//     pm2.start(pm2Config, pm2ConfigCallback)
// } )

var pm2 = require('pm2');

pm2.start([
    {
        name: 'app1',
        script: './app.js',
        "instances" : "max",
        exec_mode  : "cluster"        
    }
]);


// pm2.connect(function(err) {
//   if (err) {
//     console.error(err);
//     process.exit(2);
//   }
  
//   pm2.start({
//     script    : 'app.js',         // Script to be run
//     // exec_mode : 'cluster',        // Allows your app to be clustered
//     instances : 1,                // Optional: Scales your app by 4
//     // max_memory_restart : '100M'   // Optional: Restarts your app if it reaches 100Mo
//   }, function(err, apps) {
//     pm2.disconnect();   // Disconnects from PM2
//     if (err) throw err
//   });
// });