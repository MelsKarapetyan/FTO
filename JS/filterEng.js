const container = document.querySelector(".pictures");
const allbtn = document.querySelector(".allBtn");
const yerevanBtn = document.querySelector("#yerevan");
const shirakBtn = document.querySelector("#shirak");
const loriBtn = document.querySelector("#lori");
const tavoushBtn = document.querySelector("#tavoush");
const aragacotnBtn = document.querySelector("#aragacotn");
const kotayqBtn = document.querySelector("#kotayq");
const gegharkunikBtn = document.querySelector("#gegharkunik");
const armavirBtn = document.querySelector("#armavir");
const araratBtn = document.querySelector("#ararat");
const vayotsDzorBtn = document.querySelector("#vayotsDzor");
const syunikBtn = document.querySelector("#syunik");

let object = [
    {
        name: "Creative tour",
        ID: "object",
        ID2: "gegharkunik",
        bgImage: "pic1",
        tour1: "1. mount Parakatar, lake Hayeli",
        tour2: "2. up to Shara's mountain",
        tour3: "3. Gyumri + Minas Avetisyan's house-museum",
        url: "HTML/arm/creativeTeamArm.html",
    },
    {
        name: "ethnic travel Armenia",
        ID: "object",
        ID2: "syunik",
        bgImage: "pic2",
        tour1: "1. Syunik's treasure: Hin khot, Hin Shinuhayr, Hin Halidzor",
        tour2: "",
        tour3: "",
        url: "HTML/arm/creativeTeamArm.html",
    },
    {
        name: "Hamshen tour",
        ID: "object",
        ID2: "syunik",
        bgImage: "pic3",
        tour1: "1. Meghri: 2 days",
        tour2: "2. Ani form Kharkov + buttock (exceptional)",
        tour3: "3. Dsegh and Qobayr",
        url: "HTML/arm/creativeTeamArm.html",
    },
    {
        name: "Mamik",
        ID: "object",
        ID2: "yerevan",
        bgImage: "pic4",
        tour1: "1. assyrian culture's day",
        tour2: "",
        tour3: "",
        url: "HTML/arm/creativeTeamArm.html",
    },
    {
        name: "Mihr voyage",
        ID: "object",
        ID2: "aragacotn",
        bgImage: "pic5",
        tour1: "1. to Dashtadem",
        tour2: "",
        tour3: "",
        url: "HTML/arm/creativeTeamArm.html",
    },
    {
        name: "Denis",
        ID: "object",
        ID2: "lori",
        bgImage: "pic6",
        tour1: "1. Dsegh's miracles",
        tour2: "",
        tour3: "",
        url: "HTML/arm/creativeTeamArm.html",
    }
];

let All = object.filter((region) => region.ID == "object");
let yerevan = object.filter((region) => region.ID2 == "yerevan");
let shirak = object.filter((region) => region.ID2 == "shirak");
let lori = object.filter((region) => region.ID2 == "lori");
let tavoush = object.filter((region) => region.ID2 == "tavoush");
let aragacotn = object.filter((region) => region.ID2 == "aragacotn");
let kotayq = object.filter((region) => region.ID2 == "kotayq");
let gegharkunik = object.filter((region) => region.ID2 == "gegharkunik");
let armavir = object.filter((region) => region.ID2 == "armavir");
let ararat = object.filter((region) => region.ID2 == "ararat");
let vayotsDzor = object.filter((region) => region.ID2 == "vayotsDzor");
let syunik = object.filter((region) => region.ID2 == "syunik");

// for adding all items at browser loading
for(let i = 0; i < All.length; i++){
    let userDiv = document.createElement("div");
    userDiv.classList.toggle(`${All[i].ID}`);
    userDiv.innerHTML= `
    <div class="obj-div-1 ${All[i].bgImage}"> 
        <div class="obj-div-2"> 
            organized tours:
                <p>${All[i].tour1}</p>
                <p>${All[i].tour2}</p>
                <p>${All[i].tour3}</p>
        </div>
    </div>
    <h3> ${All[i].name} </h3><br>
    <a href="${All[i].url}" class="a_link"> MORE </a>
    `;
    container.appendChild(userDiv);
}

//filter function
function filterFun(Region){
    container.innerHTML= ""

    infos = JSON.stringify(Region);
    info = localStorage.setItem("Value", infos);
    itemName = localStorage.getItem("Value");
    items = JSON.parse(itemName);
    console.log(items);

    for(let i = 0; i < items.length; i++){
        let userDiv = document.createElement("div");
        userDiv.classList.toggle(`${items[i].ID}`);
        userDiv.classList.toggle(`${items[i].ID2}`);
        userDiv.classList.toggle(`${items[i].ID3}`);
        userDiv.classList.toggle(`${items[i].ID4}`);
        userDiv.innerHTML= `
        <div class="obj-div-1 ${items[i].bgImage}"> 
            <div class="obj-div-2"> 
                organized tours:
                    <p>${items[i].tour1}</p>
                    <p>${items[i].tour2}</p>
                    <p>${items[i].tour3}</p>
            </div>
        </div>
        <h3> ${items[i].name} </h3><br>
        <a href="${items[i].url}" class="a_link"> ՄԱՆՐԱՄԱՍՆԵՐ </a>
        `;
        container.appendChild(userDiv);
    }
}

allbtn.onclick = function(){
    filterFun(All);
    allbtn.style.backgroundColor = "#FFCF0D";
    yerevanBtn.style.backgroundColor = "#f0f0f0";
    shirakBtn.style.backgroundColor = "#f0f0f0";
    loriBtn.style.backgroundColor = "#f0f0f0";
    tavoushBtn.style.backgroundColor = "#f0f0f0";
    aragacotnBtn.style.backgroundColor = "#f0f0f0";
    kotayqBtn.style.backgroundColor = "#f0f0f0";
    gegharkunikBtn.style.backgroundColor = "#f0f0f0";
    armavirBtn.style.backgroundColor = "#f0f0f0";
    araratBtn.style.backgroundColor = "#f0f0f0";
    vayotsDzorBtn.style.backgroundColor = "#f0f0f0";
    syunikBtn.style.backgroundColor = "#f0f0f0";
}
yerevanBtn.onclick = function(){
    filterFun(yerevan);
    allbtn.style.backgroundColor = "#f0f0f0";
    yerevanBtn.style.backgroundColor = "#FFCF0D";
    shirakBtn.style.backgroundColor = "#f0f0f0";
    loriBtn.style.backgroundColor = "#f0f0f0";
    tavoushBtn.style.backgroundColor = "#f0f0f0";
    aragacotnBtn.style.backgroundColor = "#f0f0f0";
    kotayqBtn.style.backgroundColor = "#f0f0f0";
    gegharkunikBtn.style.backgroundColor = "#f0f0f0";
    armavirBtn.style.backgroundColor = "#f0f0f0";
    araratBtn.style.backgroundColor = "#f0f0f0";
    vayotsDzorBtn.style.backgroundColor = "#f0f0f0";
    syunikBtn.style.backgroundColor = "#f0f0f0";
}
shirakBtn.onclick = function(){
    filterFun(shirak);
    allbtn.style.backgroundColor = "#f0f0f0";
    yerevanBtn.style.backgroundColor = "#f0f0f0";
    shirakBtn.style.backgroundColor = "#FFCF0D";
    loriBtn.style.backgroundColor = "#f0f0f0";
    tavoushBtn.style.backgroundColor = "#f0f0f0";
    aragacotnBtn.style.backgroundColor = "#f0f0f0";
    kotayqBtn.style.backgroundColor = "#f0f0f0";
    gegharkunikBtn.style.backgroundColor = "#f0f0f0";
    armavirBtn.style.backgroundColor = "#f0f0f0";
    araratBtn.style.backgroundColor = "#f0f0f0";
    vayotsDzorBtn.style.backgroundColor = "#f0f0f0";
    syunikBtn.style.backgroundColor = "#f0f0f0";
}
loriBtn.onclick = function(){
    filterFun(lori);
    allbtn.style.backgroundColor = "#f0f0f0";
    yerevanBtn.style.backgroundColor = "#f0f0f0";
    shirakBtn.style.backgroundColor = "#f0f0f0";
    loriBtn.style.backgroundColor = "#FFCF0D";
    tavoushBtn.style.backgroundColor = "#f0f0f0";
    aragacotnBtn.style.backgroundColor = "#f0f0f0";
    kotayqBtn.style.backgroundColor = "#f0f0f0";
    gegharkunikBtn.style.backgroundColor = "#f0f0f0";
    armavirBtn.style.backgroundColor = "#f0f0f0";
    araratBtn.style.backgroundColor = "#f0f0f0";
    vayotsDzorBtn.style.backgroundColor = "#f0f0f0";
    syunikBtn.style.backgroundColor = "#f0f0f0";
}
tavoushBtn.onclick = function(){
    filterFun(tavoush);
    allbtn.style.backgroundColor = "#f0f0f0";
    yerevanBtn.style.backgroundColor = "#f0f0f0";
    shirakBtn.style.backgroundColor = "#f0f0f0";
    loriBtn.style.backgroundColor = "#f0f0f0";
    tavoushBtn.style.backgroundColor = "#FFCF0D";
    aragacotnBtn.style.backgroundColor = "#f0f0f0";
    kotayqBtn.style.backgroundColor = "#f0f0f0";
    gegharkunikBtn.style.backgroundColor = "#f0f0f0";
    armavirBtn.style.backgroundColor = "#f0f0f0";
    araratBtn.style.backgroundColor = "#f0f0f0";
    vayotsDzorBtn.style.backgroundColor = "#f0f0f0";
    syunikBtn.style.backgroundColor = "#f0f0f0";
}
aragacotnBtn.onclick = function(){
    filterFun(aragacotn);
    allbtn.style.backgroundColor = "#f0f0f0";
    yerevanBtn.style.backgroundColor = "#f0f0f0";
    shirakBtn.style.backgroundColor = "#f0f0f0";
    loriBtn.style.backgroundColor = "#f0f0f0";
    tavoushBtn.style.backgroundColor = "#f0f0f0";
    aragacotnBtn.style.backgroundColor = "#FFCF0D";
    kotayqBtn.style.backgroundColor = "#f0f0f0";
    gegharkunikBtn.style.backgroundColor = "#f0f0f0";
    armavirBtn.style.backgroundColor = "#f0f0f0";
    araratBtn.style.backgroundColor = "#f0f0f0";
    vayotsDzorBtn.style.backgroundColor = "#f0f0f0";
    syunikBtn.style.backgroundColor = "#f0f0f0";
}
kotayqBtn.onclick = function(){
    filterFun(kotayq);
    allbtn.style.backgroundColor = "#f0f0f0";
    yerevanBtn.style.backgroundColor = "#f0f0f0";
    shirakBtn.style.backgroundColor = "#f0f0f0";
    loriBtn.style.backgroundColor = "#f0f0f0";
    tavoushBtn.style.backgroundColor = "#f0f0f0";
    aragacotnBtn.style.backgroundColor = "#f0f0f0";
    kotayqBtn.style.backgroundColor = "#FFCF0D";
    gegharkunikBtn.style.backgroundColor = "#f0f0f0";
    armavirBtn.style.backgroundColor = "#f0f0f0";
    araratBtn.style.backgroundColor = "#f0f0f0";
    vayotsDzorBtn.style.backgroundColor = "#f0f0f0";
    syunikBtn.style.backgroundColor = "#f0f0f0";
}
gegharkunikBtn.onclick = function(){
    filterFun(gegharkunik);
    allbtn.style.backgroundColor = "#f0f0f0";
    yerevanBtn.style.backgroundColor = "#f0f0f0";
    shirakBtn.style.backgroundColor = "#f0f0f0";
    loriBtn.style.backgroundColor = "#f0f0f0";
    tavoushBtn.style.backgroundColor = "#f0f0f0";
    aragacotnBtn.style.backgroundColor = "#f0f0f0";
    kotayqBtn.style.backgroundColor = "#f0f0f0";
    gegharkunikBtn.style.backgroundColor = "#FFCF0D";
    armavirBtn.style.backgroundColor = "#f0f0f0";
    araratBtn.style.backgroundColor = "#f0f0f0";
    vayotsDzorBtn.style.backgroundColor = "#f0f0f0";
    syunikBtn.style.backgroundColor = "#f0f0f0";
}
armavirBtn.onclick = function(){
    filterFun(armavir);
    allbtn.style.backgroundColor = "#f0f0f0";
    yerevanBtn.style.backgroundColor = "#f0f0f0";
    shirakBtn.style.backgroundColor = "#f0f0f0";
    loriBtn.style.backgroundColor = "#f0f0f0";
    tavoushBtn.style.backgroundColor = "#f0f0f0";
    aragacotnBtn.style.backgroundColor = "#f0f0f0";
    kotayqBtn.style.backgroundColor = "#f0f0f0";
    gegharkunikBtn.style.backgroundColor = "#f0f0f0";
    armavirBtn.style.backgroundColor = "#FFCF0D";
    araratBtn.style.backgroundColor = "#f0f0f0";
    vayotsDzorBtn.style.backgroundColor = "#f0f0f0";
    syunikBtn.style.backgroundColor = "#f0f0f0";
}
araratBtn.onclick = function(){
    filterFun(ararat);
    allbtn.style.backgroundColor = "#f0f0f0";
    yerevanBtn.style.backgroundColor = "#f0f0f0";
    shirakBtn.style.backgroundColor = "#f0f0f0";
    loriBtn.style.backgroundColor = "#f0f0f0";
    tavoushBtn.style.backgroundColor = "#f0f0f0";
    aragacotnBtn.style.backgroundColor = "#f0f0f0";
    kotayqBtn.style.backgroundColor = "#f0f0f0";
    gegharkunikBtn.style.backgroundColor = "#f0f0f0";
    armavirBtn.style.backgroundColor = "#f0f0f0";
    araratBtn.style.backgroundColor = "#FFCF0D";
    vayotsDzorBtn.style.backgroundColor = "#f0f0f0";
    syunikBtn.style.backgroundColor = "#f0f0f0";
}
vayotsDzorBtn.onclick = function(){
    filterFun(vayotsDzor);
    allbtn.style.backgroundColor = "#f0f0f0";
    yerevanBtn.style.backgroundColor = "#f0f0f0";
    shirakBtn.style.backgroundColor = "#f0f0f0";
    loriBtn.style.backgroundColor = "#f0f0f0";
    tavoushBtn.style.backgroundColor = "#f0f0f0";
    aragacotnBtn.style.backgroundColor = "#f0f0f0";
    kotayqBtn.style.backgroundColor = "#f0f0f0";
    gegharkunikBtn.style.backgroundColor = "#f0f0f0";
    armavirBtn.style.backgroundColor = "#f0f0f0";
    araratBtn.style.backgroundColor = "#f0f0f0";
    vayotsDzorBtn.style.backgroundColor = "#FFCF0D";
    syunikBtn.style.backgroundColor = "#f0f0f0";
}
syunikBtn.onclick = function(){
    filterFun(syunik);
    allbtn.style.backgroundColor = "#f0f0f0";
    yerevanBtn.style.backgroundColor = "#f0f0f0";
    shirakBtn.style.backgroundColor = "#f0f0f0";
    loriBtn.style.backgroundColor = "#f0f0f0";
    tavoushBtn.style.backgroundColor = "#f0f0f0";
    aragacotnBtn.style.backgroundColor = "#f0f0f0";
    kotayqBtn.style.backgroundColor = "#f0f0f0";
    gegharkunikBtn.style.backgroundColor = "#f0f0f0";
    armavirBtn.style.backgroundColor = "#f0f0f0";
    araratBtn.style.backgroundColor = "#f0f0f0";
    vayotsDzorBtn.style.backgroundColor = "#f0f0f0";
    syunikBtn.style.backgroundColor = "#FFCF0D";
}