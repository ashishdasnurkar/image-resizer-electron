const path = require("path");
const { app, BrowserWindow } = require("electron");

function createMainwindow() {
  const mainWindow = new BrowserWindow({
    title: "Resize imager",
    width: 500,
    height: 600,
  });

  mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
}

app.whenReady().then(() => {
  createMainwindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
