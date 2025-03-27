// WebSocket Clock
function initWebSocketClock() {
    const websocketTimeEl = document.getElementById('websocket-time');
    
    // Establish WebSocket connection
    const ws = new WebSocket('ws://localhost:3000');
    
    ws.onopen = () => {
        console.log('WebSocket connection established');
    };
    
    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        websocketTimeEl.textContent = data.time;
    };
    
    ws.onerror = (error) => {
        console.error('WebSocket Error:', error);
        websocketTimeEl.textContent = 'Connection Error';
    };
}

// HTTP Polling Clock
function initPollingClock() {
    const pollingTimeEl = document.getElementById('polling-time');
    
    async function fetchTime() {
        try {
            const response = await fetch('/polling-time');
            
            // Check if there's content (204 means no change)
            if (response.status === 204) return;
            
            const data = await response.json();
            pollingTimeEl.textContent = data.time;
        } catch (error) {
            console.error('Polling Error:', error);
            pollingTimeEl.textContent = 'Fetch Error';
        }
    }
    
    // Poll every second
    setInterval(fetchTime, 1000);
}

// Initialize both clock methods
document.addEventListener('DOMContentLoaded', () => {
    initWebSocketClock();
    initPollingClock();
});