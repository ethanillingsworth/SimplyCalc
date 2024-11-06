const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 300,
      height: 450,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
      autoHideMenuBar: true
    })
  
    win.loadFile('index.html')
    win.resizable = false
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  app.quit()
})
