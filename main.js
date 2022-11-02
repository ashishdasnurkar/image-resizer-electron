const path = require("path");
const { app, BrowserWindow } = require("electron");

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
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
