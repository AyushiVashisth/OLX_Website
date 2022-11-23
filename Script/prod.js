


let que=JSON.parse(localStorage.getItem("neProductpage"))||{}

let box=document.getElementById("container")
let img=document.createElement("img")
img.setAttribute("class","banner")
img.src=que.image;
let name=document.createElement("p")
name.innerText=que.name;
name.setAttribute("class","nam")

let description=document.createElement("p")
description.innerText=que.description;
description.setAttribute("class","desc")

let price=document.createElement("p")
price.innerText=`₹  ${que.price}`;



price.setAttribute("class","price")
let date=document.createElement("p")
date.innerText=`Date - ${que.date}`;


date.setAttribute("class","date")


box.append(img,price,date,description,name)