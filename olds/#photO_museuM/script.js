const imagesWRAPPER = document.querySelector(".images");
const load_moreBTN = document.querySelector(".load_more");
const searchINPUT = document.querySelector(".search_box input");
const light_boxTAG = document.querySelector(".light_box");
const pre_imgTAG = document.querySelector(".pre_img");

const closeBTN = document.querySelector(".close");
const downloadBTN = document.querySelector(".download");

const apiKEY = "EHXHNIfkEXiW2U0bhuifh8io6KQU6GN8pk2ev6PQ5wPHSifvVdQAwXSg";
const perPAGE = 15;
let currentPAGE =1;
let searchITEM;

download_img =(selected_img_url, name) =>{
    // console.log(name);
    console.log(selected_img_url);
    // url to blob, blob to download link & download it 
    fetch(selected_img_url).then(res => res.blob()).then(link =>{
        // console.log(link);
        const a = document.createElement("a");
        a.href = URL.createObjectURL(link);
        // console.log(link);
        // a.download = new Date().getTime();
        // console.log(link.type);
        // good if u dont give me i will make it by myself bonk! 
        a.download = `${name}.jpg`;
        a.click();
    }).catch(() => alert("failed to download image!"));
}

show_light_box = (img, name) =>{
    light_boxTAG.style.display="block";
    pre_imgTAG.querySelector("img").src = img;
    light_boxTAG.querySelector("span").innerText = name;
    //passing url as an attribute
    downloadBTN.setAttribute("data-img", img);
    downloadBTN.setAttribute("data-name", name);
    document.body.style.overflow = "hidden";
}

createHTML = (images) =>{
    imagesWRAPPER.innerHTML += images.map(img => 
        `<li class="card">
            <img onclick="show_light_box('${img.src.large2x}', '${img.photographer}')" src="${img.src.large2x}">
            <div class="details">
                <div class="artist_san">
                <img src="camera.png" style="width: 25px;">
                    <span>${img.photographer}</span>
                </div>
                <button onclick="download_img('${img.src.large2x}', '${img.photographer}')">
                    <img src="import.png" style="width: 20px;">
                </button>
            </div>
        </li>`
        ).join("");
}

getIMAGES =(url)=>{
    load_moreBTN.innerText = "loading...";
    load_moreBTN.style.opacity = 0.5;
    fetch(url, {
        headers: {Authorization: apiKEY}
    }).then(res => res.json()).then(data => {
        load_moreBTN.innerText = "load more";
        load_moreBTN.style.opacity=1;
        // console.log(data);
        createHTML(data.photos);
    }).catch(()=> alert("smth worng i can feel it!"));
}

getIMAGES(`https://api.pexels.com/v1/curated?page=${currentPAGE}&per_page=${perPAGE}`);

load_search_images =(e) =>{
    // just return if no searchITEM 
    if(e.target.value === "") return searchITEM = null;
    if(e.key === "Enter"){
        currentPAGE =1;
        searchITEM = e.target.value;
        console.log(searchITEM);
        imagesWRAPPER.innerHTML="";
        getIMAGES(`https://api.pexels.com/v1/search?query=${searchITEM}&page=${currentPAGE}&per_page=${perPAGE}`)
    }
}

load_moreBTN.onclick =() =>{
    //increate current page to load new 15 pages
    currentPAGE ++; 
    let default_url = `https://api.pexels.com/v1/curated?page=${currentPAGE}&per_page=${perPAGE}`;
    // if threre's search item use new url ifnot use defatult
    used_url = searchITEM ? `https://api.pexels.com/v1/search?query=${searchITEM}&page=${currentPAGE}&per_page=${perPAGE}` : default_url;
    getIMAGES(used_url);
}

closeBTN.onclick =() =>{
    light_boxTAG.style.display="none";
    document.body.style.overflow = "auto";
}
                                                                // and use here with dataset. 
downloadBTN.addEventListener("click", (e) => download_img(e.target.dataset.img, e.target.dataset.name));


searchINPUT.addEventListener("keydown", load_search_images);