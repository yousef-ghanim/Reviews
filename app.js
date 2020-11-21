const profiles = [{
    id: 1,
    name: "Mike George",
    job: "CARPENTER",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit eveniet obcaecati molestiae? Error, quaerat neque praesentium nostrum veniam vel nesciunt ipsum maxime suscipit iure vitae beatae blanditiis exercitationem non. Perferendis."
},
{
    id: 2,
    name: "Trevor Smith",
    job: "WORKER",
    text: "to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings"
},
{
    id: 3,
    name: "Ana Mary",
    job: "MARKETER",
    text: " that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain"
},{
    id: 4,
    name: "Pim Roone",
    job: "TEACHER",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,"
}];
    

const prevBtn = document.querySelector(".fa-angle-left"); 
const nextBtn = document.querySelector(".fa-angle-right");
const name = document.querySelector(".name");
const job = document.querySelector(".job");
const text = document.querySelector(".text");
const img = document.querySelector(".profile-pic")
const btn = document.querySelector(".btn")

let counter = 0;

window.addEventListener("DOMContentLoaded", () =>{
    showPerson();
})

nextBtn.addEventListener("click", () =>{
//       if(counter < 3){
// counter++;
//     }else {
//         counter = 0;
//     }


counter ++;
if (counter > profiles.length - 1){
    counter = 0;
} 
showPerson(); 
})

prevBtn.addEventListener("click", () =>{
//       if(counter > 0){
// counter--;
//     }else {
//         counter = 3;
//     }
counter --;
if (counter < 0){
    counter = profiles.length - 1;
} 

    showPerson();
})

btn.addEventListener("click", ()=>{
    counter = Math.floor(Math.random() * profiles.length)
    showPerson();
})

function showPerson(){
    const item = profiles[counter];
  name.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
    img.src = `./images/img-${counter}.jpg`;  
}

