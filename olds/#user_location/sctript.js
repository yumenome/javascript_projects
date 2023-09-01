const BTN = document.querySelector("button");

let api_key = "5c5c471833ff4575bd756bdd2052e8f3";

BTN.onclick =()=>{
    if(navigator.geolocation){

        BTN.innerText="allow permission";
        navigator.geolocation.getCurrentPosition(pass, fail);
    }else{
        BTN.innerText="permission required";
    }
};

pass = (position) =>{
    BTN.innerText= "detceting your locaiton...";
    let{latitude, longitude} = position.coords;

    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${api_key}`)
    .then(res => res.json()).then(data =>{
        let details =data.results[0].components;
        console.table(details);
        let{suburb, city, postcode, country} = details;
        BTN.innerText = `${suburb}, ${city}-${postcode}, ${country}`;
    }).catch(()=>{
        BTN.innerText = "somethin went wrong!";
    });
}

fail = (err) =>{
    if(err.code ==1){
        BTN.innerText= "denied the requsest";
    }else if(err.code ==2){
        BTN.innerText = "location is unavailable";
    }else{
        BTN.innerText= "something went wrong!";
    }
    
}