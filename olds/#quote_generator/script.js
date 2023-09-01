const quoteTAG = document.getElementById("quote");
const authorTAG = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getquote (url){
    const response = await fetch(url);
    var data = await response.json();
    
    quoteTAG.innerHTML=data.content;
    authorTAG.innerHTML=data.author;
}
getquote(api_url);

tweet = () =>{
    window.open("https://twitter.com/intent/tweet?text=" + quoteTAG.innerHTML,
    "tweet now", "width=700, height=400");
}

