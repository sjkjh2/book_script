var today = new Date();
var year = today.getFullYear();
var est = new Date('Apr 16, 1986 15:45:55');
var difference = today.getTime() - est.getTime();
difference = (difference / 31556900000);

var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference)  + '년 전통의 온라인 여행사!';