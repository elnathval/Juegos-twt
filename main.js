const { app, BrowserWindow, ipcMain } = require('electron')
const fs = require("fs")
const path = require("path")

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') // clave para usar ipcRenderer de forma segura
    },
    autoHideMenuBar: true
  })

  win.loadFile('webpage/index.html')
}

app.whenReady().then(() => {
  createWindow()
})

ipcMain.on('update-playercount', (event, data) => {
  const filePath = path.join(__dirname, 'playercount.txt');
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Error al crear archivo:', err);
      return;
    }
  });
});

ipcMain.on('update-day', (event, data) => {
  const filePath = path.join(__dirname, 'day.txt');
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Error al crear archivo:', err);
      return;
    }
  });
});

ipcMain.on("debug-msg", (event, data) => {
  console.log(data);
});