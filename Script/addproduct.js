const url = `http://localhost:3000/mobile`;

let catchInput = (tag) => {
  return document.getElementById(tag).value;
};

//---------------step 1, get input values ------------
let Addproduct = async () => {
  let img = catchInput("pro_img");
  let name = catchInput("pro_name");
  let pri = catchInput("pro_pri");
  let brnd=catchInput("brand")
  let city = catchInput("pro_city");
  let desc=catchInput("pro_desc")
  //--------------step2 ,add input values in product object--
  let product = {
    id: Date.now() + "mob",
    brand:brnd,
    name:name,
    price: +pri,
    city: city,
    description:desc,
    image: img,
  };

  // POST Request
  //----------Step 3, POST Request --------
  let res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
