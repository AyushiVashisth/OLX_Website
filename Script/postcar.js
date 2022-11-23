const changePage = () => {
    window.location.href = "./index.html";
}

const adminlogin = () => {
    window.location.href = "adminlogin.html";
}

const postData = async() => {
    let image = document.getElementById("image").value;
    let price = +document.getElementById("price").value;
    let post = +document.getElementById("year").value;
    let category = "Car";
    let model = document.getElementById("model").value;
    let name = document.getElementById("name").value;
    let location = document.getElementById("location").value;
    let id = Date.now();

    let obj = {id, image, price, post, category, model, name, location};

    let api = `https://mock-server-app-u4oe.onrender.com/api/car`;

        await fetch(api, {
        method : "POST",
        body : JSON.stringify(obj),
        headers : {
            "Content-Type" : "application/json"
        }
    });
}