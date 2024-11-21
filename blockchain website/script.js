document.addEventListener("DOMContentLoaded", () => {
    // Handle the Overview link
    const overview = document.getElementById("overview");
    overview.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Overview of the topic");
        window.location.href = overview.href;
    });

    // Handle the Application link
    const application = document.getElementById("app");
    application.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Application of blockchain");
        window.location.href = application.href;
    });

    // Handle the Introduction link
    const intro = document.getElementById("intro");
    intro.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Introduction of the page");
        window.location.href = intro.href;
    });
});