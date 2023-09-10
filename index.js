let userInput =document.getElementById("date");
let result = document.getElementById("result")
userInput.max = new Date().toISOString().split("T")[0];
const months = [31,28,31,30,31,30,31,31,30,31,30,31];



function calculateAge(){

    let today = new Date();
    let dobInput = new Date(userInput.value);

    let bMonth, bDate, bYear;

    let bDetails ={
        date: dobInput.getDate(),
        month: dobInput.getMonth(),
        year: dobInput.getFullYear()
    };

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDate = today.getDate();

    if(
        bDetails.year > currentYear ||
        (bDetails.month > currentMonth && bDetails.year === currentYear)||
        (bDetails.date >currentDate && bDetails.month === currentMonth &&
            bDetails.year === currentYear)
    ){
        alert("Invalid date");
        return;
    }

    // year
    bYear = currentYear - bDetails.year;
    // month
    if(currentMonth >= bDetails.month){
        bMonth = currentMonth - bDetails.month;
    }else{
        bYear--;
        bMonth = 12 + currentMonth - bDetails.month;
    }
    // date
    if(currentDate >= bDetails.date){
        bDate = currentDate - bDetails.date;
    }else{
        bMonth--;
        let days = months[currentMonth - 2];
        bDate = days + currentDate - bDetails.date;
    }

    if(bMonth < 0){
        bMonth = 11;
        bYear--;
    }
    // html result
    result.innerHTML = `You are ${bYear} years, ${bMonth} month and ${bDate} days old.`;
}


