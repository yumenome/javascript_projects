const auto_inputTAG = document.querySelector(".auto_input");

let products;
fetch("https://fakestoreapi.com/products")
  .then((response) =>{
    const responseDATA = response.json();
    return responseDATA;
  })
  .then((datas) =>{
      products= datas;
      auto_inputTAG.disabled = false;
  })
  .catch((err) =>{
    console.log(err);
  });

const resultTAG =document.querySelector(".result_container");
const ansTAG =document.querySelector(".ans");

let filteredPRODUCTS = [];

auto_inputTAG.addEventListener("keyup", (e) =>{
  if(
    e.key === "ArrowDown" ||
    e.key === "ArrowUp" ||
    e.key === "Enter"
  ){
    selectedPRODUCT(e.key);
    return;
  }
    resultTAG.innerHTML = "";
    const searchTEXT = e.target.value.toLowerCase();
    if(searchTEXT.length === 0) {
        return;
    };

    filteredPRODUCTS = products.filter((p) =>{
        return p.title.toLowerCase().includes(searchTEXT);
    });

    const hastoSHOW = filteredPRODUCTS.length > 0;
    if(hastoSHOW){
        for (let i = 0; i < filteredPRODUCTS.length; i++) {

            const productCONTAINER =document.createElement("div");
            productCONTAINER.id = filteredPRODUCTS[i].id;
            productCONTAINER.classList.add("productCONTAINER");
            
            const productNAME =document.createElement("div");
            productNAME.classList.add("productNAME");
            productNAME.append(filteredPRODUCTS[i].title);
            
            const productIMAGE = document.createElement("img");
            productIMAGE.classList.add("productIMAGE");
            productIMAGE.src = filteredPRODUCTS[i].image;

            productCONTAINER.append(productNAME, productIMAGE);
            resultTAG.append(productCONTAINER);
        }
    }
});

let index = -1;
const selectedPRODUCT = (key) =>{
 if(key === "ArrowDown"){
  if( index === filteredPRODUCTS.length -1){
    deselected();
    index = -1;
  }
  index +=1;
  const selectedCONTAINER = selected(index);
  if(index > 0){
    deselected();
  }
selectedCONTAINER.classList.add("selected");
 }else if (key === "ArrowUp") {
    if(index === -1) return;
    if(index === 0){
      deselected();
      index = -1;
      return;
    }
    index -= 1;
    deselected();
    const selectedCONTAINER = selected(index);
    selectedCONTAINER.classList.add("selected");
  } else {
    resultTAG.style.display= "none";
    ansTAG.style.display= "inline";
    const enteredPRODUCT = selected(index);
    const enterTAG =document.querySelector(".selected");
    ansTAG.append(enterTAG);

  }
}

const selected = (i) =>{
  const selectedID = filteredPRODUCTS[i].id.toString();
  const selectedCONTAINER = document.getElementById(selectedID);
  selectedCONTAINER.style.backgroundColor = "blanchedalmond";
  selectedCONTAINER.firstChild.style.color = "black";
  return selectedCONTAINER;
};

const deselected = () =>{
  const deselectedPRODUCT = document.querySelector(".selected");
  deselectedPRODUCT.style.backgroundColor = "white";
  deselectedPRODUCT.firstChild.style.color = "black";
  deselectedPRODUCT.classList.remove("selected");
};
