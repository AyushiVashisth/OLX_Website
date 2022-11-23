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


// ====================================== mobile section ============================


// let url=`https://olxdatabaseapi.herokuapp.com/mobile`;
let url=`https://olx-database.onrender.com/mobile`;
let getData=async()=>{
    let res=await fetch(url);
    res=await res.json();
    console.log(res)
    rendorDom(res)

}

getData()

let Createelem=(tag)=>{
    return document.createElement(tag);
}

let card=({name,price,city,image})=>{
    let div=Createelem('div');
    let pimg=Createelem('img');
    let pheart=Createelem('span');
    let imgcont=Createelem('div');
    let div2=Createelem('div');
    let pprice=Createelem('p');
    let pname=Createelem('p');
    let pcity=Createelem('p');

    pimg.src=image;
    pname.innerHTML=name;
    pcity.innerHTML=city;
    pprice.innerHTML=`₹ ${price}`;
    pheart.innerHTML=`<i class="ri-heart-line"></i>`

    div.setAttribute("class","product_card");
    imgcont.setAttribute("class","heartimg")
    pimg.setAttribute("class","product_image")
    pprice.setAttribute("class","product_price item_style");
    pcity.setAttribute("class","product_city item_style");
    pname.setAttribute("class","product_name item_style");


    div2.setAttribute("class","product_details");


    div.onclick=()=>{
        console.log("click")
    }
    div2.append(pprice,pname,pcity)
    imgcont.append(pimg,pheart)
    div.append(imgcont,div2)
    return div


}


let rendorDom=(data)=>{
    let cont=document.getElementById("container");
    cont.innerHTML=null;
    data.forEach((el) => {
      //  console.log(el)
        let product=card(el);
        cont.append(product)
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

//--------------    FILTER BRAND      -------   

document.getElementById("iphone").addEventListener("click",async()=>{
    let res = await fetch(`${url}?brand=iphone`)
    let data = await res.json();
    rendorDom(data);  
})


document.getElementById("samsung").addEventListener("click",async()=>{
    let res = await fetch(`${url}?brand=samsung`)
    let data = await res.json();
    rendorDom(data);
})


document.getElementById("mi").addEventListener("click",async()=>{
    console.log()
    let res = await fetch(`${url}?brand=mi`)
    let data = await res.json();
    rendorDom(data);
})


document.getElementById("vivo").addEventListener("click",async()=>{
    let res = await fetch(`${url}?brand=vivo`)
    let data = await res.json();
    rendorDom(data);
    
})


document.getElementById("oppo").addEventListener("click",async()=>{
    let res = await fetch(`${url}?brand=oppo`)
    let data = await res.json();
    rendorDom(data);
    
})


document.getElementById("realme").addEventListener("click",async()=>{
    let res = await fetch(`${url}?brand=realme`)
    let data = await res.json();
    rendorDom(data);
    
})

