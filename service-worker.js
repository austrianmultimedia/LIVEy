/* Developer: Raphael Klein - http://austrianmultimedia.at/ */
console.log("jsfile loaded");

// INSTALLING
// Install Service Worker
self.addEventListener('install', function(event){
    console.log('>> sw installed!');
});
// Service Worker Active
self.addEventListener('activate', function(event){
    console.log('>> sw activated!');
});


self.addEventListener("message", function(event) {
    //event.source.postMessage("Responding to " + event.data);
    self.clients.matchAll().then(all => all.forEach(client => {
        client.postMessage(event.data);
    }));
});




// function send_message_to_all_clients(msg){
//     clients.matchAll().then(clients => {
//         clients.forEach(client => {
//             send_message_to_client(client, msg).then(m => console.log("SW Received Message: "+m));
//         })
//     })
// }

// function send_message_to_client(client, msg){
//     return new Promise(function(resolve, reject){
//         var msg_chan = new MessageChannel();

//         msg_chan.port1.onmessage = function(event){
//             if(event.data.error){
//                 reject(event.data.error);
//             } else {
//                 resolve(event.data);
//             }
//         };

//         client.postMessage("SW:'"+msg+"'", [msg_chan.port2]);
//     });
// }





