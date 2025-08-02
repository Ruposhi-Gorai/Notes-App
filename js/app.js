let addNoteBtn = document.querySelector("#add-btn");
// let delNote = document.querySelectorAll('.delete');
let main = document.getElementById("main");

addNoteBtn.addEventListener("click", () => {
  // alert('welcome')
  let note = document.createElement("div");
  note.classList.add("notes-box");
  note.innerHTML = ` <div class="notes-h">
   <i class="fa-solid fa-trash delete"></i>
   </div>
 <textarea type="text" class="notes-list"></textarea>`;

  note.querySelector(".delete").addEventListener("click", (e) => {
    e.target.parentNode.parentNode.remove();
  });
  main.appendChild(note);
});
