const WebSocket = require('ws');
const redis = require('redis');
const client = redis.createClient();

const wss = new WebSocket.Server({ port: 6000 });

wss.on('connection', (ws) => {
  console.log('Someone has connected');
});

client.on('message', (channel, message) => {
  console.log(`subscriber hears message ${message}`);
});

client.subscribe('testPublish');