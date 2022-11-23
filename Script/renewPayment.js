
let btn = document.getElementById('pay');

const payment = () => {
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let pincode = document.getElementById('pin').value;
    let cardnumber = document.getElementById('cardno').value;
    let cardowner = document.getElementById('cardowner').value;
    let cvv = document.getElementById('cvv').value;

    // if(name!=null&&address!=null&&city!=null&&state!=null&&pincode!=null&&cardnumber!=null&&cardowner!=null&&cvv!=null)
    // {
    //     btn.disabled = false;
    // }
    let img = document.createElement('img');
    img.src="https://i.gifer.com/origin/a1/a1d81f564eeb1468aefbcfd54d1571b8_w200.gif";
    img.style.width="20%";
    img.style.marginLeft = "18%";
    let image = document.getElementById('image');
    image.append(img);
    setTimeout(progress,3000);
    
}

let progress = () => {
    let img1 = document.createElement('img');
    img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQEsJpeG4Swb1BlPaP-biRPiBizj6yi9Ck6ducVCQ&s";
    img1.style.width="12%";
    img1.style.marginLeft = "18%";
    let image = document.getElementById('image');
    image.innerHTML=null;
    image.append(img1);
    alert("Payment successful");
    window.location.href="./renewmobile.html";
}