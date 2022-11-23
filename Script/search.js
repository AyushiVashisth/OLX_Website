import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
import {subNavbar} from "../components/subNavbar.js";
document.getElementById("navbar-2").innerHTML=subNavbar();
import {footer} from "../components/footer.js";
document.getElementById("footer").innerHTML=footer();

// ================================== Navbar ===========================

let country = document.getElementById("country");
let moving = document.getElementById("moving");
let text = document.getElementById("text");
let list = document.getElementById("list");
let c1=0
country.addEventListener("click",()=>{
    c1++
    if(c1%2==0){
        list.style.display="none";
    }else{
        list.style.display="block";
    }
    moving.classList.toggle("roted");
});

let USA=document.getElementById("USA");
USA.onclick=()=>{
    text.innerText="USA";
}
let Indan=document.getElementById("Indan");
Indan.onclick=()=>{
    text.innerText="Indian";
}
let Sri_Lanka=document.getElementById("Sri_Lanka");
Sri_Lanka.onclick=()=>{
    text.innerText="Sri_Lanka";
}
let Canda=document.getElementById("Canda");
Canda.onclick=()=>{
    text.innerText="Canda";
}
let Pakistan=document.getElementById("Pakistan");
Pakistan.onclick=()=>{
    text.innerText="Pakistan";
}

let language1 = document.getElementById("language1");
let moving1 = document.getElementById("moving1");
let list1 = document.getElementById("list1");
let eng_tag = document.getElementById("eng_tag");

let eng_eng=document.getElementById("lang_eng");
eng_eng.addEventListener("click",()=>{
    eng_tag.innerText="English";

});

let eng_hin=document.getElementById("lang_hin");
eng_hin.addEventListener("click",()=>{
    eng_tag.innerText="हिंदी";

});

let c=0;
language1.addEventListener("click",()=>{
    c++;
    if(c%2==0){
        list1.style.display="none";
    }else{
        list1.style.display="block";
    }
    moving1.classList.toggle("roted");
});
function loaderGoogleTranslate(){
    new google.translate.TranslateElement("list1")
}

// ========================== Navbar Bottom ==========================

// ========================== Navbar Bottom ==========================
let allCategoiesid = document.getElementById("allCategoiesid");
let moving2 = document.getElementById("moving2");
let list2 = document.getElementById("list2");

allCategoiesid.addEventListener("click",()=>{
    c++;
    if(c%2==0){
        list2.style.display="none";
    }else{
        list2.style.display="block";
        list2.style.display="grid";
        list2.style.gridColumn="repeat(4,1fr)";
        list2.style.gap="20px";
    }
    moving2.classList.toggle("roted");
});

// // ====================================== search section ============================

let data=JSON.parse(localStorage.getItem("olxData"));
console.log(data)
rendorDom(data)
    function rendorDom(data) {  
        let data_container=document.getElementById("main-body");
        data_container.innerHTML=null;        
    
        data.map(function(el){
            let div = document.createElement("div");

            let poster = document.createElement("img");
            poster.src = el.image;
            poster.setAttribute("id", "banner")
            let amount = document.createElement('h4')
            amount.innerText = `₹${el.price}`;
        
            let name = document.createElement('h4');
            name.innerText = el.name;
            let des = document.createElement('p');
            des.innerText = el.description;

            div.append(poster,name,amount, des)
            data_container.append(div);
        });

}
//----------------------------------------

document.getElementById("_up_mob").style.display="none";
let downMob=document.getElementById("_down_mob").addEventListener("click",()=>{
    let upMob=document.getElementById("_up_mob").style.display="block";
    let upMob2=document.getElementById("_down_mob").style.display="none";
    let mobsec=document.getElementById("mob_section").style.display="none"
})

let upMob=document.getElementById("_up_mob").addEventListener("click",()=>{
    
    let upMob2=document.getElementById("_down_mob").style.display="block";
    let downMob=document.getElementById("_up_mob").style.display="none";
    let mobsec=document.getElementById("mob_section").style.display="block"
   
})

//--------------------------------------------------------------------
let state = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    ]
    let listselect = document.createElement("select");
    listselect.setAttribute("class","listcity");
    let opt = "";
    
    for (let x of state) {
      opt = document.createElement("option");
    
      opt.innerText = x;
      
      listselect.append(opt);
    }
    document.querySelector("#city_section").append(listselect);
document.getElementById("_up_city").style.display="none";
let downCity=document.getElementById("_down_city").addEventListener("click",()=>{
    let upCity=document.getElementById("_up_city").style.display="block";
    let upcity2=document.getElementById("_down_city").style.display="none";
    let mobsec=document.getElementById("locat_section").style.display="none"
})

let upCity=document.getElementById("_up_city").addEventListener("click",()=>{
    
    let upMob2=document.getElementById("_down_city").style.display="block";
    let downMob=document.getElementById("_up_city").style.display="none";
    let mobsec=document.getElementById("locat_section").style.display="block"
   
})
//--------------------------------------------------------------

//----------------- budget ------------------

document.getElementById("_up_bud").style.display="none";

let downBud=document.getElementById("_down_bud").addEventListener("click",()=>{
    let upBud=document.getElementById("_up_bud").style.display="block";
    let upBud2=document.getElementById("_down_bud").style.display="none";
    let Budsec=document.querySelector(".slidecontainer").style.display="none"
})

let upBud=document.getElementById("_up_bud").addEventListener("click",()=>{
    
    let upBud2=document.getElementById("_down_bud").style.display="block";
    let downBud=document.getElementById("_up_bud").style.display="none";
   let Budsec=document.querySelector(".slidecontainer").style.display="block"
   
})

//-------------------price   range ---------
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
   output.innerHTML = this.value; 
}

let Rvalu=+""
slider.addEventListener("change",()=>{
    Rvalu=+slider.value
})
console.log(Rvalu)
 document.getElementById("budVal").addEventListener("click",async()=>{
    console.log(typeof Rvalu,Rvalu);
    let res = await fetch(`${url}?price_lte=${Rvalu}`)
    let data = await res.json();
    rendorDom(data);
    console.log(data)
 })

//-----------------  BRAND ----------------------

document.getElementById("_up_brnd").style.display="none";

let downBrnd=document.getElementById("_down_brnd").addEventListener("click",()=>{
    let upBrnd=document.getElementById("_up_brnd").style.display="block";
    let upBrnd2=document.getElementById("_down_brnd").style.display="none";
    let Budsec=document.getElementById("style_checkbox").style.display="none"
})

let upBrnd=document.getElementById("_up_brnd").addEventListener("click",()=>{  
    let upBrnd2=document.getElementById("_down_brnd").style.display="block";
    let downBrnd=document.getElementById("_up_brnd").style.display="none";
   let Budsec=document.getElementById("style_checkbox").style.display="block"
})
