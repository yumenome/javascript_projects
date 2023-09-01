let userINPUT = document.getElementById("date");
userINPUT.max = new Date().toISOString().split("T")[0];
const resultTAG = document.getElementById("result");
calculated = () =>{
    let brith_day = new Date(userINPUT.value);

    let d1 = brith_day.getDate();
    let m1 = brith_day.getMonth() +1;
    let y1 = brith_day.getFullYear();

    let t0day = new Date();

    let d2 = t0day.getDate();
    let m2 = t0day.getMonth() +1;
    let y2 = t0day.getFullYear();

    // present
    let d3, m3, y3;
// rn: pre: birth:
    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = (12 +m2) - m1;
    }
    if(d2 >= d1){
        d3 = d2 -d1;
    }else{
        m3--;
// total present days for the this month 
        d3 = days_in_month(y1, m1) + d2 - d1;
    }
    if(m3 < 0){
        m3 =11;
        y3--;
    }
    // console.log(y3,m3,d3);
    resultTAG.innerHTML = `you're <span>${y3}</span> years,
                                <span>${m3}</span> months &
                                <span>${d3}</span> days old rn:`;
}

days_in_month = (year, month) => {
    return new Date(year, month, 0).getDate();
}