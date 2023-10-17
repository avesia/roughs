import { app, BrowserWindow } from "electron";
import * as path from "node:path";

const IS_DEV = (process.env.AVESIA_APP_DEV == "true");
const DEVMODE_HTML_URL = "http://localhost:5253";

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.setMenu(null);

    if (IS_DEV) {
        win.loadURL(DEVMODE_HTML_URL);
    } else {
        win.loadFile('index.html');
    }
    
    win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
