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
        ID3: "qaylarshav",
        ID4: "kazmakerputyun",
        bgImage: "pic1",
        tour1: "1. Փառակատար լեռ, Հայելի լիճ",
        tour2: "2. Վերելք Շարայի լեռ",
        tour3: "3. Գյումրի + Մինաս Ավետիսյանի տուն թանգարան",
        url: "HTML/arm/creativeTeamArm.html",
    },
    {
        name: "ethnic travel Armenia",
        ID: "object",
        ID2: "syunik",
        ID3: "qaylarshav",
        ID4: "kazmakerputyun",
        bgImage: "pic2",
        tour1: "1. Սյունիքի գանձեր՝ Հին Խոտ, Հին Շինուհայր, Հին Հալիձոր",
        tour2: "",
        tour3: "",
        url: "#.html",
    },
    {
        name: "Hamshen tour",
        ID: "object",
        ID2: "syunik",
        ID3: "qaylarshav",
        ID4: "kazmakerputyun",
        bgImage: "pic3",
        tour1: "1. Մեղրի 2 օր",
        tour2: "2. ԱՆԻՆ՝ Խարկովից + Երերույք (բացառիկ)",
        tour3: "3. Դսեղ և Քոբայր",
        url: "#.html",
    },
    {
        name: "Mamik",
        ID: "object",
        ID2: "yerevan",
        ID3: "auto",
        ID4: "kazmakerputyun",
        bgImage: "pic4",
        tour1: "1. Ասորական մշակույթի օր",
        tour2: "",
        tour3: "",
        url: "#.html",
    },
    {
        name: "Mihr voyage",
        ID: "object",
        ID2: "aragacotn",
        ID3: "qaylarshav",
        ID4: "kazmakerputyun",
        bgImage: "pic5",
        tour1: "1. Դեպի Դաշտադեմ",
        tour2: "",
        tour3: "",
        url: "#.html",
    },
    {
        name: "Denis",
        ID: "object",
        ID2: "lori",
        ID3: "auto",
        ID4: "anhat",
        bgImage: "pic5",
        tour1: "1. Դսեղի հրաշքները",
        tour2: "",
        tour3: "",
        url: "#.html",
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

// for adding all items at browser leading
for(let i = 0; i < All.length; i++){
    let userDiv = document.createElement("div");
    userDiv.classList.toggle(`${All[i].ID}`);
    userDiv.innerHTML= `
    <div class="obj-div-1 ${All[i].bgImage}"> 
        <div class="obj-div-2"> 
            Կազմակերպվող տուրեր՝
                <p>${All[i].tour1}</p>
                <p>${All[i].tour2}</p>
                <p>${All[i].tour3}</p>
        </div>
    </div>
    <h3> ${All[i].name} </h3><br>
    <a href="${All[i].url}" class="a_link"> ՄԱՆՐԱՄԱՍՆԵՐ </a>
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
                Կազմակերպվող տուրեր՝
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