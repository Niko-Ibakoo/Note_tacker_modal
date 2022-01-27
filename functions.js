var counter = 1;

function AddNote()
{
    //vars
    let noteContainer = document.getElementById('note-container');
    let textInp = document.getElementById('inp').value;
    let individualNotes = document.createElement('div');
    let learnButton = document.createElement('button');
    let parag = document.createElement('p');
    let header = document.createElement('div');
    let buttonDiv = document.createElement('div');
    let par_modal = document.getElementById('p-modal');
    modal = document.getElementById('myModal');


    //styles
    individualNotes.style.width ="600px";
    individualNotes.style.height ="200px";
    //classes
    learnButton.classList.add("learn-more");
    individualNotes.classList.add("indNotes")
    parag.classList.add("parag");
    header.classList.add("header-notes");
    buttonDiv.classList.add("button-div");

    //inerith
    parag.innerText = textInp;
    par_modal.innerText = textInp;
    header.innerText = "#" + counter + ") Note:"
    learnButton.innerText = "Learn More"

   //check for empty text, if true don't show learn more
    if(textInp === ""){ buttonDiv.style.display="none";}


    //append
    //
    individualNotes.appendChild(header);
    buttonDiv.appendChild(learnButton);
    individualNotes.appendChild(parag);
    individualNotes.appendChild(buttonDiv);


    noteContainer.appendChild(individualNotes);
    counter ++;

    //open the modal
    learnButton.onclick = function(){
        modal.style.display ="block"
    }
    

}
 //close modal
function closeMod(){
    modal.style.display ="none"
}
