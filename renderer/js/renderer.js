const form = document.querySelector("#img-form");
const img = document.querySelector("#img");
const outputPath = document.querySelector("#output-path");
const filename = document.querySelector("#filename");
const heightInput = document.querySelector("#height");
const widthInput = document.querySelector("#width");

function loadImage(e) {
  const file = e.target.files[0];
  if (!isFileImage(file)) {
    alertError("Please select an image");
    return;
  }
  console.log("Success");
  // Show form, image name and output path
  form.style.display = "block";
  filename.innerHTML = img.files[0].name;
  outputPath.innerText = path.join(os.homedir(), "imageresizer");
}

function isFileImage(file) {
  const acceptedFileTypes = ["image/gif", "image/png", "image/jpeg"];
  return file && acceptedFileTypes.includes(file["type"]);
}
img.addEventListener("change", loadImage);

function alertSuccess(message) {
  Toastify.toast({
    text: message,
    duration: 5000,
    close: false,
    style: {
      background: "green",
      color: "white",
      textAlign: "center",
    },
  });
}

function alertError(message) {
  Toastify.toast({
    text: message,
    duration: 5000,
    close: false,
    style: {
      background: "red",
      color: "white",
      textAlign: "center",
    },
  });
}
