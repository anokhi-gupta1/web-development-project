function generateQRCode() {
    const text = document.getElementById('text').value;
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ''; // Clear previous QR code

    if (text.trim() !== '') {
        new QRCode(qrcodeContainer, {
            text: text,
            width: 128,
            height: 128,
        });
    } else {
        alert('Please enter text to generate QR code');
    }
}
