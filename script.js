const HourElement = document.getElementById("Hour");
const MinuteElement = document.getElementById("Minutes");
const SecondsElement = document.getElementById("Seconds");
const AmPmElement = document.getElementById("ampm");

function UpdateClock(){
             let hour = new Date().getHours()
             let minutes = new Date().getMinutes()
             let seconds = new Date().getSeconds()
             let ampm = "AM"

             if(hour > 12){

                          hour = hour - 12;
                          ampm = "PM";
             }

             hour = hour < 10 ? "0" + hour : hour;
             minutes = minutes < 10 ? "0" + minutes : minutes;
             seconds = seconds < 10 ? "0" + seconds : seconds;

             HourElement.innerText = hour;
             MinuteElement.innerText = minutes;
             SecondsElement.innerText = seconds;
             AmPmElement , (innerText = ampm)

             setTimeout(() => {
                          UpdateClock();
             } , 1000)

}

UpdateClock();