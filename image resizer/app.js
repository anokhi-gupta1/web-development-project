document.addEventListener('DOMContentLoaded', () => {
    const imageUpload = document.getElementById('image-upload');
    const imagePreview = document.getElementById('image-preview');
    const resizeButton = document.querySelector('.resize-button');
    const downloadLink = document.getElementById('download-link');

    imagePreview.addEventListener('click', () => {
        imageUpload.click();
    });

    imageUpload.addEventListener('change', () => {
        const file = imageUpload.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                imagePreview.src = event.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

    resizeButton.addEventListener('click', () => {
        const width = document.getElementById('width').value;
        const height = document.getElementById('height').value;
        const aspectRatio = document.getElementById('aspect-ratio').checked;
        const reduceSize = document.getElementById('reduce-size').checked;

        if (!imageUpload.files[0]) {
            alert("Please upload an image first.");
            return;
        }

        if (!width || !height) {
            alert("Please enter the desired width and height.");
            return;
        }

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const img = new Image();
        img.src = imagePreview.src;

        img.onload = () => {
            let newWidth = width;
            let newHeight = height;

            if (aspectRatio) {
                const ratio = img.width / img.height;
                if (width / height > ratio) {
                    newWidth = height * ratio;
                } else {
                    newHeight = width / ratio;
                }
            }

            if (reduceSize) {
                newWidth = Math.min(newWidth, img.width);
                newHeight = Math.min(newHeight, img.height);
            }

            canvas.width = newWidth;
            canvas.height = newHeight;
            context.drawImage(img, 0, 0, newWidth, newHeight);

            const resizedImage = canvas.toDataURL('image/png');
            downloadLink.href = resizedImage;
            alert("Image resized successfully. Click the download button to save it.");
        };
    });
});
