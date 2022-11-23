
const learnMore = () => {
    let container = document.getElementById("two");
    let original = `<div>
    <a href="renewmobile.html">
        <img src="https://cdn.shopify.com/s/files/1/0650/4044/9786/files/OLX_Renew_89bef6aa-b947-4b75-aa85-60990fcbbc6e_300x.png?v=1658153310"/>
    </a>
</div>
<div >
    <div id="three">
        <a href="renewCollection.html"><h3>All Phones</h3></a>
        <h3>iPhone</h3>
        <h3>Samsung</h3>
        <h3>OnePlus</h3>
    </div>
    <div id="four">
        <h3>Xiaomi</h3>
        <h3>Realme</h3>
    </div>
</div>
<div id="five">
    <input placeholder="What are you looking for?"/>
</div>
<div id="six">
    <a href="renewLogin.html"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAZlBMVEX///8AAADk5OTs7Ozz8/P7+/svLy+Tk5PBwcHn5+dcXFytra3FxcWgoKDd3d2jo6NFRUUkJCTOzs5paWk8PDx3d3dQUFAqKiodHR23t7eIiIgQEBBhYWEICAhKSko1NTUXFxeAgIDLPLmcAAADx0lEQVRoge1a6ZaqMAxWKBYsAioIVcfl/V/y2hRcRpamDXPOPaffvxlCP5Jma+pi4eHh4eHh4YFExLJUSplmLPo70iDf18sO9T4P/oI0yovlbxT53Fqz4xepxpHNSSs+uE4ff4nZWMNLx7HmccCiKGJBzNfdPy/JPLTprV0/Dz8/Jz/oBz/xHLStjYv424ei+DKbrXO98qbfc6PuMTWthGW32aBAsJpD4x0sehgNU+1gKSUtg5A5T0jtgZgykMFh15NiZ3A8OtpYrbeaVoRdlaAk4wUr7wwEM7A0VbKGyOVGopwwmKKtmZVBtnzI3mgUjjFxKeh2WIXH1jQ6opVBwBmBQXk1FocdDqflJpGqhYbz428kVIZWHcYJIa+88E7Aq5JQhZC/TyZyI0AOwkSkMI+6McB+YRoJ8Af31jbAuVX7AhEvpmMLsR/ajwwbj6FpERkH2mxE+gbYz89o9jc8IfNPjHWIfrDSuPhqbB7yV4Ima2/UWn3KUxQkjmxdcOVrGDtcwtrRhNFjg1WB2RuLV6p8kfTQd4yDQvRiytcwMsyOcSozP1CYZwJQt6Sh1ZXNLDT22Ko5Cjge5QaCglLdNkcb7Jo+rbrXhCfAW5qpBYMtVc54Aiw9ctoH2pr4GPpACFOE25ipd40SqYmHSRmsOuJcetxzIgrdF7Q6y0O/rQM93DiRTjc0snYGW31nkKDSjyYcwBKsHcstD+I97zPZTQqLuWaj7XBMaVZtZJzGclO9JtHkM7MXwvNyCGuKs+cw5E8/7XxT4IXaykszoG5TiLkUTng9QKpRH+e4aAj5a7zelOu7EDKWQtzX5ZsJjuQ6i+fq5TH9zIVJysvu4Yl2n5MudBvenxoy3n3XgdDYstvBsfOKXLVSZPPJNgvWU/1L2jKbN71j6NKjSTpqExpFwky0z1zMti3QH3l1rsItLTc9IEVcO72jd7ECnQW1E5ZukWxzV2FyBzKByoK2I3bwam0yfPufojfnA6H16/qDbX0LXNmuDYdr4qsdLXSmB7t3tUOaHKm+AHN268OOPlLZ5C3HK5nccpP0Cdo+CCPIOPh8ye1C6IXUSmGmaprb2U6ViAabLqV7BUfdd3WAOHCi1deZyDiEMMBMQ/uwwQeicIndDgk+EtU8CHNZ1Q8178CMcvWlkauZtaFrjEdnNmX3G+jZLNGsPsQGo0pWjTPtYqGSD+aO8uxQAX+vc0HIq4pPMURW5R8zrsTegQ5BOfTKvKZFtUtb9gaV5RtE8ecWlaQPqqqh7r5jomlFKGb5DZqHh4eHh8f/jX/ZQR+u2/dgWQAAAABJRU5ErkJggg=="/></a>
    <img src="data:image/jpeg;base64,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"/>
</div>`;
    container.innerHTML=null;
    container.style.backgroundColor="rgb(55, 238, 238)";
    container.style.width="100%";
    
    let div1 = document.createElement('div');
    div1.innerHTML="";

    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerText = "Early bird offer";

    let p1 = document.createElement('p');
    p1.innerText = "Get 5% discount up to Rs.1000 on all debit and credit cards. Zero-cost card EMI options available through PayU payment gateway";

    let p2 = document.createElement('p');
    p2.innerText = "Limited period offer, Zero-cost EMI only on specific durations (T&C apply)";

    
    h2.style.textAlign="center";
    p1.style.textAlign="center";
    p2.style.textAlign="center";

    div.append(h2,p1,p2);

    let div2 = document.createElement('div');
    let button = document.createElement('button');
    button.style.margin="20% 45%";
    button.innerHTML="&#10006";
    button.onclick = () =>{
        container.innerHTML=null;
        container.style.backgroundColor=null;
        container.style.width="80%";
        container.style.gridTemplateColumns="20% 35% 30% 10%";
        container.style.marginTop = "0px";
        container.innerHTML=original;
    }
    div2.append(button);

    container.style.gridTemplateColumns="33% 28% 30%";

    container.style.marginTop = "-10px";
    
    container.append(div1,div,div2);
    
}

const Login = async () => {
    
    let login_email = document.getElementById('email').value;
    let login_password = document.getElementById('password').value;
    

    const url=`https://sleepy-headland-48374.herokuapp.com/auth`;

    let res = await fetch(url);
    let data = await res.json();
    //console.log("data:",data);

    let flag=false;
    for(let i=0;i<data.length;i++)
    {
        let obj=data[i];
        if(obj.email==login_email)
        {
            if(obj.password==login_password)
            {
                alert("Authorization successful");
                flag=true;
                window.location.href="renewmobile.html";
            }
        }
    }
    if(flag==false)
    {
        alert("Invalid credentials");
    }
}