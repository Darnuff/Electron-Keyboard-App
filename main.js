const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow } = electron;

let mainWindow;

// Listen for the App Ready
app.on('ready', () => {
    // Create New Window
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    // Load HTML file into window
    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file',
            slashes: true
        })
    );

    // Quit app when closed
    mainWindow.on('closed', function() {
        app.quit();
    });
});