document.write("set of date"+"<br>");
document.write("-----------------------"+"<br>");

var date=new Date();
document.write("Today date"+"<br>"+date+"<br><br>");

date.setMonth(1);
date.setFullYear(2003);
date.setDate(26);
date.setHours(4);
date.setMinutes(0);
date.setMilliseconds(0);
date.setSeconds(0);
// let a=date.setTime(10);
document.write("updating date :"+"<br>"+date+"<br>");
// document.write(a);
