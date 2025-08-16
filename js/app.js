let addNoteBtn = document.querySelector("#add-btn");
let main = document.getElementById("main");

window.addEventListener('DOMContentLoaded', showNotes);

addNoteBtn.addEventListener("click", (e) => {
  // console.log(e);
  e.preventDefault();
  createNote('');
  saveNotes();
});
function createNote(content) {
  let note = document.createElement("div");

  note.classList.add("notes-box");
  note.innerHTML = ` 
  <div class="notes-h">
   <i class="fa-solid fa-trash delete text-light"></i>
   </div>
 <textarea type="text" class="notes-list">${content}</textarea>`;

  // Save on typing
  let textArea = note.querySelector("textarea");
  textArea.addEventListener("input", saveNotes);

  main.appendChild(note);
}

main.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.closest(".notes-box").remove();
    saveNotes();
  }
});

function saveNotes() {
  let allNotes = document.querySelectorAll('.notes-list');
  let notesData = [];
  allNotes.forEach(val => {
      notesData.push(val.value);
  })
  localStorage.setItem("notes", JSON.stringify(notesData));
}
// Show saved notes from localStorage on load
function showNotes() {
  let savedNotes = JSON.parse(localStorage.getItem('notes')) ?? [];
  savedNotes.forEach(noteText => createNote(noteText));
  console.log(savedNotes);
  
}
