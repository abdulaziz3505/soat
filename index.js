const day = document.querySelector(".day")
const time = document.querySelector(".time")
const year = document.querySelector(".year")

console.log(time);

function changeTime() {
    let sana = new Date ()
    let soat = sana.getHours().toString().padStart(2, "0")

    let daqiqa = sana.getMinutes().toString().padStart(2, "0")
    let soniya = sana.getSeconds().toString().padStart(2, "0")

    time.innerHTML = `${soat}:${daqiqa}:${soniya}`

   let haftaKun = sana.getDay()
    if(haftaKun === 0){
        day.innerHTML = "Yakshanba"
    }else if(haftaKun === 1){
        day.innerHTML = "Dushanba"
    }else if(haftaKun === 2){
        day.innerHTML = "Seshanba"
    }else if(haftaKun === 3){
        day.innerHTML = "Chorshanba"
    }else if(haftaKun === 4){
        day.innerHTML = "Payshanba"
    }else if(haftaKun === 5){ 
        day.innerHTML = "Juma"
    }else if(haftaKun === 6){
        day.innerHTML = "Shanba"
    }
    
    year.innerHTML = `${sana.getDate()}.${sana.getMonth()+1}.${sana.getFullYear()}`
    

}

changeTime()


setInterval(function(){
    changeTime()
}, 1000)

function changeYear() {
    let year = new Date ()  

    let kun = year.getDay().toString().padStart(2, "0")
    let yil = yer.getDate().toString().padStart(2, "0")
    let oy = year.getFullYear().toString().padStart(2, "0")
   
    if(changeYear === 0){
        year.innerHTML = "Yanvar"
    }else if(changeYear === 2){
        year.innerHTML = "Fevral"
    }else if(changeYear === 3){
        year.innerHTML = "Mart"
    }else if(changeYear === 4){
        year.innerHTML = "Aprel"
    }else if(changeYear === 5){
        year.innerHTML = "May"
    }else if(changeYear === 6){ 
        year.innerHTML = "Iyun"
    }else if(changeYear === 7){
        year.innerHTML = "Iyul"
    }else if(changeYear === 8){
        year.innerHTML = "Avgust"
    }else if(changeYear === 9){
        year.innerHTML = "Sentabr"
    }else if(changeYear === 10){
        year.innerHTML = "Oktyabr"
    }else if(changeYear === 11){
        year.innerHTML = "Noyabr"
    }else if(changeYear === 12){
        year.innerHTML = "Dekabr"
    }

    year.innerHTML = `${year.getDay}:${year.getDate}${year.getFullYear}:`

}

changeYear()





