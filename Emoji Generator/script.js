const click = document.getElementById('click');
const key = "86b43331f57c23ffadf945d60043f5c6d0510400";

click.addEventListener('click', async () => {
    try {
        let res = await fetch(`https://emoji-api.com/emojis?access_key=${key}`);
        let result = await res.json();

        if (result.length > 0) {
            let r = Math.floor(Math.random() * result.length);
            console.log(result[r].character);
            click.innerText = result[r].character;
        } else {
            console.error("No emojis found.");
            click.innerText = "❌"; // Show an error icon
        }
    } catch (error) {
        console.error("Error fetching emojis:", error);
        click.innerText = "⚠️"; // Show a warning icon
    }
});
