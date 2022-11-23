const userLogin = (Event) => {
    Event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mess = document.getElementById("message")

    if(email === "mustafa@olx.com" && password === "olx123@"){
        mess.innerText = `Signed in as ${name}`
        setTimeout(()=>{
            window.location.href = "./admincar.html"
        }, 2000)
    } else {
        mess.innerText = "Invalid Admin"
    }
}