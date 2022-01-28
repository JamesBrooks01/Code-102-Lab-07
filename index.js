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

function askForTime() {
        let dtAnswer = prompt("Would you like to know the current date and time?");
            if (dtAnswer == null) {
                askForTime();
            }
            dtAnswer = dtAnswer.toLowerCase();
            if (dtAnswer === 'yes') {
                alert('It is ' + time + ' on ' + Fulldate);
            } else if (dtAnswer === 'no') {
                alert("It's alright, I'm just a question form");
            }
            else{
                alert('Please input a Valid input. If answer looks correct, try all lowercase');
                    if (i<3) {
                        i++
                        console.log("Number of Inputs", i)
                        askForTime();
                    }
            }
        return
}
function changeListcolor() {
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
    return
}

askForTime()
if (i >= 3) {
    alert('Fine, be that way.')
}
alert("Try reloading the page when you're done reading, it might change")
changeListcolor()
