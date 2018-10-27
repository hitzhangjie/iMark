import * as actions from '../actions/view'

let viewMenu = {
  label: 'View',
  submenu: [{
    label: 'Toggle Full Screen',
    accelerator: (function () {
      if (process.platform === 'darwin') {
        return 'Ctrl+Command+F'
      } else {
        return 'F11'
      }
    })(),
    click (item, focusedWindow) {
      if (focusedWindow) {
        focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
      }
    }
  }, {
    type: 'separator'
  }, {
    label: 'Font...',
    accelerator: 'CmdOrCtrl+.',
    click (item, browserWindow) {
      actions.changeFont(browserWindow)
    }
  }, {
    type: 'separator'
  }, {
    id: 'sourceCodeModeMenuItem',
    label: 'Source Code Mode',
    accelerator: 'Alt+CmdOrCtrl+S',
    type: 'checkbox',
    checked: false,
    click (item, browserWindow) {
      actions.typeMode(browserWindow, item, 'sourceCode')
    }
  }, {
    id: 'typewriterModeMenuItem',
    label: 'Typewriter Mode',
    accelerator: 'Alt+CmdOrCtrl+T',
    type: 'checkbox',
    checked: false,
    click (item, browserWindow) {
      actions.typeMode(browserWindow, item, 'typewriter')
    }
  }, {
    id: 'focusModeMenuItem',
    label: 'Focus Mode',
    accelerator: 'Shift+CmdOrCtrl+F',
    type: 'checkbox',
    checked: false,
    click (item, browserWindow) {
      actions.typeMode(browserWindow, item, 'focus')
    }
  }, {
    type: 'separator'
  }, {
    label: 'Toggle Side Bar',
    id: 'sideBarMenuItem',
    accelerator: 'CmdOrCtrl+J',
    type: 'checkbox',
    checked: false,
    click (item, browserWindow) {
      actions.layout(item, browserWindow, 'showSideBar')
    }
  }, {
    label: 'Toggle Tab Bar',
    id: 'tabBarMenuItem',
    accelerator: 'Alt+CmdOrCtrl+B',
    type: 'checkbox',
    checked: false,
    click (item, browserWindow) {
      actions.layout(item, browserWindow, 'showTabBar')
    }
  }, {
    type: 'separator'
  }]
}

if (process.env.NODE_ENV !== 'production' || process.env.NODE_ENV === 'development') {
  // add devtool when development
  viewMenu.submenu.push({
    label: 'Toggle Developer Tools',
    accelerator: (function () {
      if (process.platform === 'darwin') {
        return 'Alt+Command+I'
      } else {
        return 'Ctrl+Shift+I'
      }
    })(),
    click (item, focusedWindow) {
      if (focusedWindow) {
        focusedWindow.webContents.toggleDevTools()
      }
    }
  })
  // add reload when development
  viewMenu.submenu.push({
    label: 'Reload',
    accelerator: 'CmdOrCtrl+R',
    click (item, focusedWindow) {
      if (focusedWindow) {
        focusedWindow.reload()
      }
    }
  })
}

if (process.platform === 'darwin') {
  viewMenu.submenu.push({
    type: 'separator'
  }, {
    label: 'Bring All to Front',
    role: 'front'
  })
}

export default viewMenu
