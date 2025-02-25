// Function to load notes from local storage
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => {
        addNoteToDOM(note.content, note.date);
    });
}

// Function to add a new note
function addNote() {
    const date = new Date().toLocaleString();
    const noteContent = ""; // Initially empty

    // Add the note to the DOM
    addNoteToDOM(noteContent, date);

    // Save the note to local storage
    saveNotesToLocalStorage(noteContent, date);
}

// Function to add a note to the DOM
function addNoteToDOM(content, date) {
    let divEle = document.createElement("div");
    divEle.setAttribute("class", "singleNote");

    divEle.innerHTML = `
        <div>
            <button class="editBtn">Edit</button>
            <button class="removeBtn">Remove</button>
        </div>
        <div>
            <div class="note hidden" id="div">${content}</div>
            <textarea name="" class="note" id="txtA">${content}</textarea>
        </div>
        <div class="date">${date}</div>
    `;

    // Add event listener for the Edit button
    let editBtn = divEle.querySelector(".editBtn");
    editBtn.addEventListener("click", () => {
        let txtA = divEle.querySelector("#txtA");
        let noteContentDiv = divEle.querySelector("#div");

        noteContentDiv.classList.toggle("hidden");
        txtA.classList.toggle("hidden");

        if (txtA.classList.contains("hidden")) {
            noteContentDiv.textContent = txtA.value;
            let updatedDate = new Date().toLocaleString();
            divEle.querySelector(".date").textContent = updatedDate;

            // Update local storage
            updateLocalStorage();
        }
    });

    // Add event listener for the Remove button
    let removeBtn = divEle.querySelector('.removeBtn');
    removeBtn.addEventListener('click', () => {
        divEle.remove();
        updateLocalStorage(); // Update local storage after removal
    });

    document.getElementById("allNote").append(divEle);
}

// Function to save notes to local storage
function saveNotesToLocalStorage(content, date) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push({ content, date });
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Function to update local storage
function updateLocalStorage() {
    const notesElements = document.querySelectorAll('.singleNote');
    const notes = Array.from(notesElements).map(note => {
        const content = note.querySelector('#txtA').value;
        const date = note.querySelector('.date').textContent;
        return { content, date };
    });
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Load notes when the page is loaded
window.onload = loadNotes;

// Event listener for the Add Note button
document.getElementById("btn").addEventListener("click", addNote);