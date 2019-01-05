// Read exisiting notes from local storage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes');

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return [];
    }
}
// Save the notes to localStorage
const savedNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from a list
const removeNote = function(id){
    const noteIndex = notes.findIndex(function(note){
        return note.id === id;
    });
    if (noteIndex > -1){
        notes.splice(noteIndex, 1);
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div');
    const textEle = document.createElement('span');
    const button = document.createElement('button');

    //Setup the note title text
    button.textContent = 'x';
    noteEl.appendChild(button);
    button.addEventListener('click', () => {
        removeNote(note.id);
        savedNotes(notes)
        renderNotes(notes, filters);
    });

    // Setup the note title text
    if (note.title.length > 0) {
        textEle.textContent = note.title;
    } else {
        textEle.textContent = "Unamed note";
    }
    noteEl.appendChild(textEle);
    return noteEl;
}

// Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })
    document.querySelector("#notes").innerHTML = "";

    filteredNotes.forEach((note) => {
        const noteEl = generateNoteDOM(note);
        document.querySelector('#notes').appendChild(noteEl);
    })
}