let date = new Date()
let CurrentD = date.getDate();
let CurrentM = date.getMonth() + 1;
let CurrentY = date.getFullYear();
let Fulldate = CurrentM + "-" + CurrentD + "-" + CurrentY;
let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
let CurrentS = date.getSeconds();
let timeDate = time + ' ' + Fulldate;
let listColor = document.getElementById("List");
console.log(timeDate)

let dtAnswer = prompt("Would you like to know the current date and time?");

 if (dtAnswer === 'yes') {
    alert('It is ' + time + ' on ' + Fulldate);
} else if (dtAnswer === 'no') {
    alert("It's alright, I'm just a question form");
}
else {
    alert('Rude');
}

alert("Try reloading the page when you're done reading, it might change")

if (CurrentS > 40) {
    listColor.style.color = '#FCA311';
}
else if (CurrentS > 20) {
    listColor.style.color = '#DC2F02';
}
else {
    listColor.style.color = '#6A040F';
}
console.log('listColor', listColor)
 
