

document.addEventListener('DOMContentLoaded', function() {
    let b1 = document.getElementById('mybutton');
    let b2 = document.getElementById('mybutton2');
    let c1 = document.getElementById('copycode');

    // Function to generate a random hex color
    const hexvalue = () => {
        let hexavalue = '0123456789abcdef';
        let colors = "#";
        for (let i = 0; i < 6; i++) {
            colors += hexavalue[Math.floor(Math.random() * 16)];
        }
        return colors;
    };

    // Function to generate a gradient with two random colors
    const generateGradient = () => {
        let color1 = hexvalue();  // Generate first random color
        let color2 = hexvalue();  // Generate second random color
        document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`; // Set gradient
        c1.textContent = `background-image: linear-gradient(to right, ${color1}, ${color2})`; // Update the gradient display in the div
        return `linear-gradient(to right, ${color1}, ${color2})`;  // Return gradient as string
    };

    // Function to copy text to the clipboard
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)  // Copy text to clipboard
            .then(() => {
                alert(`Gradient "${text}" copied to clipboard!`); // Show confirmation popup
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    };

    // Event listeners to update button text on click and change the background color
    b1.addEventListener('click', () => {
        let gradient = generateGradient();  // Get the gradient from generateGradient
        b1.innerHTML = `Color: ${gradient}`;  // Update button text with gradient
    });

    b2.addEventListener('click', () => {
        let gradient = generateGradient();  // Get the gradient from generateGradient
        b2.innerHTML = `Color: ${gradient}`;  // Update button text with gradient
    });

    // Event listener to copy the gradient text when the copycode div is clicked
    c1.addEventListener('click', () => {
        let gradientText = c1.textContent;  // Get the text from the div
        copyToClipboard(gradientText);  // Copy it to clipboard
    });
});


 
