import { DateTime } from 'luxon';

function updateClocks() {
    const now = DateTime.now();
    
    // Update Central Time
    const central = now.setZone('America/Chicago');
    document.getElementById('central-time').textContent = central.toLocaleString({
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    }).toLowerCase();
    
    // Update Eastern Time
    const eastern = now.setZone('America/New_York');
    document.getElementById('eastern-time').textContent = eastern.toLocaleString({
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    }).toLowerCase();
    
    // Update Date (using Central Time)
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = central.toLocaleString({ 
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    }
}

// Initial update
updateClocks();

// Update every second
setInterval(updateClocks, 1000);
