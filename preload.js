const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  update_playercount: (contenido) => ipcRenderer.send('update-playercount', contenido),
  update_day: (contenido) => ipcRenderer.send('update-day', contenido),
  debugMsg: (contenido) => ipcRenderer.send('debug-msg', contenido)
});