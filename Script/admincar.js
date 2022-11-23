let url = `https://mock-server-app-u4oe.onrender.com/api/car`

let page = 1;

const increamentPage = () => {
    page++;
    fetchCars(page);
}

const fetchCars = async() => {
    let res = await fetch(`${url}?_page=${page}&_limit=12`);
    let data = await res.json();
    renderDOM(data);
}

const card = (image, price, year, model, name, location, id) => {
    let div = document.createElement("div");

    let poster = document.createElement("img");
    poster.src = image;
    poster.setAttribute("id", "banner")
    let amount = document.createElement('h4')
    amount.innerText = `₹${price}`;
    let advertDate = document.createElement('p');
    advertDate.innerText = year;
    let carName = document.createElement('b');
    carName.innerText = `${model} - ${name}`
    let area = document.createElement('p');
    area.innerText = location;
    let deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";
    deletebtn.onclick = () => {
        deleteCar(id);
    }

    let updtbtn = document.createElement("button");
    updtbtn.innerText = "Update Price"
    updtbtn.onclick = () => {
        updatePrice(id);
    }

    div.append(poster, amount, advertDate, carName, area, deletebtn, updtbtn)
    return div;
}

const renderDOM = (data) => {
    let container = document.getElementById("main-body");
    container.innerHTML = null;

    data.forEach(({image, price, post, model, name, location, id})=>{
        let box = card(image, price, post, model, name, location, id);
        container.append(box)
    })
}

const deleteCar = async(id) => {
    await fetch(`${url}/${id}`, {
        method : "DELETE"
    });
    fetchCars();
};

const updatePrice = async(id) => {
    let newPrice = +window.prompt("ENTER NEW PRICE");
    let data = { price : newPrice}
    await fetch(`${url}/${id}`, {
        method : "PATCH",
        body : JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json"
        }
    });
    fetchCars();
}

const searhCar = async() => {
    let query = document.getElementById("query").value;
    let res = await fetch(`${url}?name=${query}`);
    let data = await res.json();
    renderDOM(data);
}

let id;
const debounce = (func, delay) => {
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(()=>{
        func();
    }, delay)
}

const hyundaidata = async() => {
    let res = await fetch(`${url}?model=Hyudai`);
    let data = await res.json();
    renderDOM(data);
}

const fetchHyundai = async() => {
    let res = await fetch(`${url}?model=Hyudai`);
    let data = await res.json();
    renderDOM(data);
}

const mahindraData = async() => {
    let res = await fetch(`${url}?model=Mahindra`);
    let data = await res.json();
    renderDOM(data);
}

const fetchMahindra = async() => {
    let res = await fetch(`${url}?model=Mahindra`);
    let data = await res.json();
    renderDOM(data);
}

const lowtohigh = async() => {
    let res = await fetch(`${url}?_sort=price&_order=asc`)
    let data = await res.json();
    renderDOM(data);
}

const hightolow = async() => {
    let res = await fetch(`${url}?_sort=price&_order=desc`);
    let data = await res.json();
    renderDOM(data);
}

const lessThanFiveLac = async() => {
    let res = await fetch(`${url}?price_lte=500000`)
    let data = await res.json();
    renderDOM(data); 
}

const greaterThanFiveLac = async() => {
    let res = await fetch(`${url}?price_gte=500001`)
    let data = await res.json();
    renderDOM(data);
}

window.onload = () => {
    fetchCars()
}