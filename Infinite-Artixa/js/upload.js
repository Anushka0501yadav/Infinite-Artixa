
const uploadForm = document.getElementById("uploadForm");

const artworkImage = document.getElementById("artworkImage");

const fileName = document.getElementById("fileName");

const uploadMessage = document.getElementById("uploadMessage");


// Display selected filename

artworkImage.addEventListener("change", function () {

    const file = artworkImage.files[0];

    if (!file) {
        fileName.textContent = "";
        return;
    }

    // Maximum file size: 5 MB

    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {

        fileName.textContent = "File size must be less than 5 MB.";

        artworkImage.value = "";

        return;
    }

    fileName.textContent = "Selected file: " + file.name;

});


// Form submission

uploadForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const file = artworkImage.files[0];

    if (!file) {

        uploadMessage.textContent = "Please select an artwork image.";

        return;
    }

    uploadMessage.textContent =
        "Artwork details validated! Backend connection is required to save your artwork.";

    uploadForm.reset();

    fileName.textContent = "";

});