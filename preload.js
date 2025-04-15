const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  crearArchivo: (contenido) => ipcRenderer.send('crear-archivo', contenido)
});