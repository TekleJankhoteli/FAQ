let box=document.querySelectorAll(".box");
let boxBottom=document.querySelectorAll(".boxBottom");
let arrow=document.querySelectorAll(".arrow");
let answer=document.querySelectorAll(".answer");
let question=document.querySelectorAll(".question")


for (let i=0; i<box.length; i++){
    question[i].addEventListener("click", ()=>{
        boxBottom[i].classList.toggle('act');
        arrow[i].classList.toggle('rot');
        question[i].classList.toggle('bold')
        box[i].classList.toggle('NB')

       

    })
}




