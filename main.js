const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "src/preload.js"),
    },
  });

  console.log(process.env.NODE_ENV);

  // In development mode, load the Vite dev server
  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:3000"); // This points to the Vite dev server
  } else {
    // In production, load the index.html from the dist directory
    console.log("Creating window...");
    // mainWindow.loadFile(path.join(__dirname, "dist_electron", "index.html"));
    const filePath = path.join(__dirname, "dist_electron", "index.html");
    console.log("Loading index.html from:", filePath);
    mainWindow.loadFile(filePath);
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
