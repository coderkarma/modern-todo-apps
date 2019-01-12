'use strict'

// Read existing notes from local storage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes');

    try {
        return notesJSON ? JSON.parse(notesJSON) : [];
    } catch (e) {
        return [];
    }
}

// Save the notes to localStorage
const savedNotes = notes => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from a list
const removeNote = id => {
    const noteIndex = notes.findIndex(note => note.id === id);
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('a');
    const textEle = document.createElement('p');
    const statusEle = document.createElement('p');


    // Setup the note title text
    if (note.title.length > 0) {
        textEle.textContent = note.title;
    } else {
        textEle.textContent = "Unamed note";
    }
    textEle.classList.add('list-item__title')
    noteEl.appendChild(textEle);

    //setup the link
    noteEl.setAttribute('href', `edit.html#${note.id}`)
    noteEl.classList.add('list-item')

    // set up the status message
    statusEle.textContent = generateLastEdited(note.updateAt);
    statusEle.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEle);

    return noteEl;
}
// Sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1;
            } else if (a.updatedAt < b.updatedAt) {
                return 1;
            } else {
                return 0;
            }
        });
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1;
            } else if (a.createdAt < b.createdAt) {
                return 1;
            } else {
                return 0;
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            } else {
                return 0;
            }
        })
    } else {
        return notes;
    }
}

// Render application notes
const renderNotes = (notes, filters) => {
    const notesEle =   document.querySelector("#notes");
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    notesEle.innerHTML = "";

    if (notes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note);
            notesEle.appendChild(noteEl);
        })
    } else {
        const emptyMessage = document.createElement('p');
        emptyMessage.classList.add('empty-message')
        emptyMessage.textContent = "No notes to show";
        notesEle.appendChild(emptyMessage);
    }
}

// Generate the last edited message
const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`
}