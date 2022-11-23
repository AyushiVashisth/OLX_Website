let url = `https://mock-server-app-u4oe.onrender.com/api/Motorcycles`

let page = 1;

const increamentPage = () => {
    if(page == 2){
        return;
    }
    page++;
    fetchCars(page);
}

const fetchCars = async() => {
    let res = await fetch(`${url}?_page=${page}&_limit=9`);
    let data = await res.json();
    renderDOM(data);
}

const card = (image, price, year, model, name, location) => {
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

    div.append(poster, amount, advertDate, carName, area)
    return div;
}

const renderDOM = (data) => {
    let container = document.getElementById("main-body");
    container.innerHTML = null;

    data.forEach(({image, price, post, model, name, location})=>{
        let box = card(image, price, post, model, name, location);
        container.append(box)
    })
}

const searhBikes = async() => {
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

const Bajajdata = async() => {
    let res = await fetch(`${url}?model=Bajaj`);
    let data = await res.json();
    renderDOM(data);
}

const HondaData = async() => {
    let res = await fetch(`${url}?model=Honda`);
    let data = await res.json();
    renderDOM(data);
}

const fetchBajaj = async() => {
    let res = await fetch(`${url}?model=Bajaj`);
    let data = await res.json();
    renderDOM(data);
}

const fetchHonda = async() => {
    let res = await fetch(`${url}?model=Honda`);
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

const lessThanFiveTh = async() => {
    let res = await fetch(`${url}?price_lte=50000`)
    let data = await res.json();
    renderDOM(data); 
}

const greaterThanFiveTh = async() => {
    let res = await fetch(`${url}?price_gte=50001`)
    let data = await res.json();
    renderDOM(data);
}

window.onload = () => {
    fetchCars()
}