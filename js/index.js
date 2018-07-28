var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
var time = today.getTime();
var hr = today.getHours()
var min = today.getMinutes()
var sec = today.getSeconds()


if (min < 10) {
    min = "0" + min;
}

if (sec < 10) {
  sec = '0'+sec
}

if( hr > 12 ) {
    hr -= 12;
}

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

function seconds() {
  return sec
}


var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("time").innerHTML = t
}

function myStopFunction() {
    clearInterval(myVar);
}

new Vue({
  el: '#app',
  data: {
    full_name: 'Aaron Villanueva',
    pic: "https://yt3.ggpht.com/a-/ACSszfE8jr9X-8TOrsyUy2zRAX1F_6ZZz9knfCIv0w=s900-mo-c-c0xffffffff-rj-k-no",
    Id: Math.floor(1000 + Math.random() * 9000),
    date: mm + '/' + dd + '/' + yyyy,
    time: myTimer()
  }
})