const { app, BrowserWindow, ipcMain } = require('electron')
const fs = require("fs")
const path = require("path")
const ImageSlicer = require('image-slicer');    // classic nodejs require
const { event } = require('jquery');

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

ipcMain.handle('leer-archivo', async (event, filePath) => {
  try {
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return { success: true, contenido };
  } catch (error) {
    console.error('Error al leer archivo:', error);
    return { success: false, error: error.message };
  }
});

ipcMain.on("split", (event, data) => {
  var contenido;
  try {
    contenido = fs.readFileSync("./mode.txt", 'utf-8');
    
  } catch {
    console.error('Error al leer archivo:', error);
  }
  var path = contenido.split("=").join(",").split("\r\n").join(",").split(",")[3];
  ImageSlicer.slice(path + data, ['.png'], 784, 550, "data");
});