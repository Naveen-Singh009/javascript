document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('imageInput').addEventListener('change', handleImage);
});

function handleImage() {
    // Get the necessary HTML elements
    const input = document.getElementById('imageInput');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Get the selected file
    const file = input.files[0];
    if (!file) return; // If no file is selected, do nothing

    // Create a FileReader to read the file
    const reader = new FileReader();

    // Define what to do once the file is loaded
    reader.onload = function (e) {
        // Create an image element
        const img = new Image();

        // Define what to do once the image is loaded
        img.onload = function () {
            // Set the canvas size to the image size
            canvas.width = img.width;
            canvas.height = img.height;

            // Draw the image on the canvas
            ctx.drawImage(img, 0, 0, img.width, img.height);

            // Get the canvas data as a data URL with reduced quality
            const dataUrl = canvas.toDataURL('image/jpeg', 0.7); // Change the format and quality as needed

            // Create a temporary link and trigger the download
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'reduced_image.jpg'; // Change the filename as needed
            link.click();
        };

        // Set the image source to the data URL
        img.src = e.target.result;
    };

    // Read the file as a data URL
    reader.readAsDataURL(file);
}