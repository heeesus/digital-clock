$(function(){
// app.js
let d = new Date();
let h = d.getHours(); // 시간
let m = d.getMinutes(); // 분
let s = d.getSeconds(); // 초

$('.hour').html(h);
$('.min').html(m);
$('.sec').html(s);
})

// 시간재생 - 매 1 초마다 재생
setInterval(function(){
let d = new Date();
let h = d.getHours(); // 시간
let m = d.getMinutes(); // 분
let s = d.getSeconds(); // 초

// 0 ~ 9까지는 앞에 0을표시
if(s < 10) {
    s = '0' + s;
}
if(m < 10) {
    m = '0' + m;
}
if(h < 10) {
    h = '0' + h;
}

// 시간표시
$('.hour').html(h);
$('.min').html(m);
$('.sec').html(s);
}, 1000);
