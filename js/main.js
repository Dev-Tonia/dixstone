function updateFileName(input) {
  let fileName = input.files[0]?.name || "Upload document";
  document.getElementById("file-name").textContent = fileName;
}
