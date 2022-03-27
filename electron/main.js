const { app, BrowserWindow, ipcMain, Notification } = require('electron')
const { version: grpcVersion } = require('@grpc/grpc-js/package.json');
const path = require('path')

const isDev = !app.isPackaged

// function createSplashWindow() {
//     const win = new BrowserWindow({
//         width: 400,
//         height: 200,
//         frame: false,
//         transparent: false,
//         backgroundColor: 'blue',
//         webPreferences:{
//             nodeIntegration: false,
//             worldSafeExecuteJavaScript: true,
//             contextIsolation: true
//         }
//     })

//     win.loadFile(path.join(__dirname, 'splash.html'))
//     return win
// }

function createWindow() {
    const win = new BrowserWindow({
        width:800,
        height: 600,
        show: false,
        frame: false,
        minWidth: 700,
        minHeight: 600,
        webPreferences:{
            contextIsolation: false,
            // worldSafeExecuteJavaScript: false,
            nodeIntegration: true,
            //preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile(path.join(__dirname, 'index.html'))
    isDev && win.webContents.openDevTools()
    return win
}

if(isDev) {
    require('electron-reload')(path.join(__dirname, '../build'), {
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
    })
}

app.whenReady()
    .then(()=>{
        const main = createWindow()
        //const splash = createSplashWindow()

        main.maximize()
        main.show()
        
        // main.once('ready-to-show', ()=>{
        //     setTimeout(()=>{
        //         splash.destroy()
        //         main.maximize()
        //         main.show()
        //     }, 3000)
        // })

        ipcMain.on('close', () => {
            main.close()
        })
        
        ipcMain.on('minimize', () => { 
            main.minimize()
        })
        
        ipcMain.on('maximize', () => {
            main.isMaximized() ? main.unmaximize() : main.maximize()
        })

        ipcMain.on('whats', (_, number) => {
            var url = `https://api.whatsapp.com/send?phone=`+number
            require('electron').shell.openExternal(url);
        })
    })


app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    } 
})

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})

