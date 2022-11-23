var form=document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    var data={
        name:form.name.value,
        email:form.email.value,
        password:form.password.value
    }
    console.log(data);
    localStorage.setItem("userData",JSON.stringify(data))
    alert("Signup SUcsessfull....")
    window.location.href="./login.html";
});