const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

// Variable to store last sent time
let lastSentTime = null;

// WebSocket connections
const clients = new Set();

wss.on('connection', (ws) => {
  clients.add(ws);
  
  // Send initial time immediately
  const initialTime = new Date().toLocaleTimeString();
  ws.send(JSON.stringify({ time: initialTime }));

  ws.on('close', () => {
    clients.delete(ws);
  });
});

// Function to broadcast time to all WebSocket clients
function broadcastTime() {
  const currentTime = new Date().toLocaleTimeString();
  
  // Only broadcast if time has changed
  if (currentTime !== lastSentTime) {
    const timeData = JSON.stringify({ time: currentTime });
    
    clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(timeData);
      }
    });

    lastSentTime = currentTime;
  }
}

// Broadcast time every second
setInterval(broadcastTime, 1000);

// HTTP Polling endpoint
let lastPollingTime = null;

app.get('/polling-time', (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  
  // Only send if time has changed
  if (currentTime !== lastPollingTime) {
    res.json({ time: currentTime });
    lastPollingTime = currentTime;
  } else {
    res.status(204).end(); // No content if time hasn't changed
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});