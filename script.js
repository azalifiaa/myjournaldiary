function saveNote() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value;

    if (noteText.trim() === "") {
        alert("Jangan dikosongin ya ceritanya!");
        return;
    }

    const notes = JSON.parse(localStorage.getItem('myNotes') || "[]");
    const newNote = {
        text: noteText,
        date: new Date().toLocaleString('id-ID')
    };
    
    notes.push(newNote);
    localStorage.setItem('myNotes', JSON.stringify(notes));
    noteInput.value = '';
    displayNotes();
}

function displayNotes() {
    const notesList = document.getElementById('notesList');
    const notes = JSON.parse(localStorage.getItem('myNotes') || "[]");
    
    notesList.innerHTML = notes.map(n => `
        <div class="note-item">
            <small>📅 ${n.date}</small>
            <p>${n.text}</p>
        </div>
    `).reverse().join('');
}

// Langsung tampilkan catatan saat halaman dibuka
displayNotes();
