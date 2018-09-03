const {
  app,
  BrowserWindow
} = require('electron')

let win = null

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 720
  })

  const url = process.env.ELECTRON_START_URL || `file://${__dirname}/dist/index.html`
  win.loadURL(url)

  if (process.env.ELECTRON_START_URL) {
    win.webContents.openDevTools()
  }

  win.on('closed', _ => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', _ => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', _ => {
  if (win === null) {
    createWindow()
  }
})
