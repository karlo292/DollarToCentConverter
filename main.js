const { app, BrowserWindow, dialog, globalShortcut } = require('electron')



const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      icon:'logo.png',
      maxHeight:600,
      minHeight:600,
      minWidth:800,
      maxWidth:800
    })
    win.loadFile('index.html')

    
    

  }



app.whenReady().then(() => {
  createWindow()

})


