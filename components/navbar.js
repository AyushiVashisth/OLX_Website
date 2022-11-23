let navbar=()=>{
    return `<div id="navbar-A">
    <a href="index.html"><img src="https://tse2.mm.bing.net/th?id=OIP.w3Xd5s2MjzBiWOyC9FFEGQHaE7&pid=Api&P=0" alt=""></a>
                <div id="country" class="country_select">
                    <div class="select">
                        <p id="text"> Select Your Country</p>
                        <i class="fa-sharp fa-solid fa-chevron-down" id="moving"></i>
                    </div>
                    <ul class="option_box" id="list" style="display:none">
                        <li class="option" id="USA">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                            <p>USA</p>
                        </li>
                        <li class="option" id="Canda">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                            <p>Canada</p>
                        </li>
                        <li class="option" id="Indan">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                            <p>India</p>
                        </li>
                        <li class="option" id="Pakistan">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                            <p>Pakistan</p>
                        </li>
                        <li class="option" id="Sri_Lanka">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                            <p>Sri Lanka</p>
                        </li>
                    </ul>
                </div>
                <div class="searchItems">
                    <input type="text" class="searchclass" id="searchid" placeholder="Find Cars, mobile phone and More...">
                    <p><i class="fa-solid fa-magnifying-glass"></i></p>
                </div>
                <div id="google_translate_element"></div>
                <div class="language" id="language1">
                    <div class="selectLanguage" >
                        <p id="eng_tag">English</p>
                        <i class="fa-sharp fa-solid fa-chevron-down" id="moving1"></i>
                    </div>
                    <ul class="hin_eng" id="list1">
                        <li  id="lang_eng" >English</li>
                        <li id="lang_hin">हिंदी</li>
                    </ul>
                </div>
                <div class="message">
                    <i class="fa-regular fa-comment"></i>
                </div>
                <div class="message">
                    <i class="fa-regular fa-bell"></i>
                </div>
                <div class="loginlogo">
                    <a href="login.html"><h3>Login</h3></a>
                </div>
                <div class="selling_page">
                <a href="admin.html">
                    <button><i class="fa-solid fa-plus"></i>
                        <p>SELL</p>
                    </button>
                </a>
                </div>
                </div>`
};

export default navbar;