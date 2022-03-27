const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electron', {
    titleBarAPI: {
        closeWindow() {
            ipcRenderer.send('close')
        },

        maximizeWindow() {
            ipcRenderer.send('maximize')
            console.log('alo')
        },

        minimizeWindow() {
            ipcRenderer.send('minimize')
        }
    }
})