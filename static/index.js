const electron = require('electron');
const app = electron.app;
const ipc = electron.ipcMain;
const globalShortcut = electron.globalShortcut;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

const platform = process.platform.startsWith('win') ? 'win' : process.platform;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null;
function openMainWindow() {
  mainWindow = new BrowserWindow({width: 1200, height: 600, frame: true});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.setAlwaysOnTop(false, 'torn-off-menu');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  mainWindow.on('blur', function() {
    let win = BrowserWindow.getFocusedWindow();
    if(win == mainWindow) return;
    globalShortcut.unregisterAll();
    console.log('blur');
  });

  mainWindow.on('focus', function() {
    bindGloablShortcut();
    registerShortcutDebug();
    console.log('focus');
  });
}

function bindGloablShortcut() {
  let shortcut = platform == 'darwin' ? 'alt+w' : 'ctrl+e';
  let bindRes = globalShortcut.register(shortcut, () => {
    if( mainWindow ) {
      if( mainWindow.isVisible() ) {
        mainWindow.hide();
      } else {
        mainWindow.showInactive();
      }
    }
  });
  if( !bindRes ) {
    console.log('Fail to bind globalShortcut');
  }
}

function registerShortcutDebug() {
  function doRegister(cmd, callback) {
    globalShortcut.register(cmd, callback);
  }

  let registed = globalShortcut.isRegistered('F12');
  if(registed) return;

  doRegister('F12', function() {
    let win = BrowserWindow.getFocusedWindow();
    if(!(win == mainWindow)) return;
    win.webContents.toggleDevTools();
    console.log("toggleDevTools F12");
  });

  doRegister('F6', function() {
    let win = BrowserWindow.getFocusedWindow();
    if(!(win == mainWindow)) return;
    win.webContents.toggleDevTools();
    console.log("toggleDevTools F6");
  });

  doRegister('F5', function() {
    let win = BrowserWindow.getFocusedWindow();
    if(!(win == mainWindow)) return;
    win.reload();
    console.log("refresh");
  });

  return;
}

function init() {
  openMainWindow();
  bindGloablShortcut();
  registerShortcutDebug();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', init);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if( process.platform !== 'darwin' ) {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if( mainWindow === null ) {
    openMainWindow();
  } else {
    mainWindow.show();
  }
});

