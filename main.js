const { app, BrowserWindow, ipcMain } = require('electron')
const fs = require("fs")
const path = require("path")

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') // clave para usar ipcRenderer de forma segura
    }
  })

  win.loadFile('webpage/index.html')
}

app.whenReady().then(() => {
  createWindow()
})

ipcMain.on('crear-archivo', (event, data) => {
  const filePath = path.join(__dirname, 'archivo_creado.txt');
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Error al crear archivo:', err);
      return;
    }
    console.log('Archivo creado con éxito:', filePath);
  });
});