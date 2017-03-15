const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
  const win = new BrowserWindow({})

  win.webContents.on('did-fail-load', () => {
    win.close()

    // If you call this instead, we'll be alright - and the
    // interval below will prove it
    // setTimeout(() => win.close(), 1000)
  })

  win.loadURL('https://i-do-not-exist')
})

app.on('window-all-closed', () => {
  setInterval(() => console.log('Still alive!'), 500)
  console.log(`We should still be here, but we'll exit right after :(`)
})
