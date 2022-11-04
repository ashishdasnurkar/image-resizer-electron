const path = require("path");
const { app, BrowserWindow, Menu } = require("electron");

const isDev = process.env.NODE_ENV !== "production";

function createMainwindow() {
  const mainWindow = new BrowserWindow({
    title: "Resize imager",
    width: isDev ? 1000 : 500,
    height: 1000,
  });

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
}

app.whenReady().then(() => {
  createMainwindow();
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

const menu = [
  {
    label: "File",
    submenu: [
      {
        label: "Quit",
        click: () => {
          app.quit();
        },
        accelerator: "CmdOrCtrl+W",
      },
    ],
  },
];

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
