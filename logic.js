function check()
{
    var dobDate=document.getElementById("day").value;
    var dobMonth=document.getElementById("month").value;
    var dobYear=document.getElementById("year").value;
    var now=new Date();
    var currentYear=now.getFullYear();
    var currentMonth=now.getMonth();
    var currentDate=now.getDate();
    var yearAge = currentYear - dobYear; 
    if (currentMonth >= dobMonth)  
      //get months when current month is greater  
      var monthAge = currentMonth - dobMonth;  
    else {  
      yearAge--;  
      var monthAge = 12 + currentMonth - dobMonth;  
    }  
    if (currentDate >= dobDate)  
    //get days when the current date is greater  
    var dateAge = currentDate - dobDate;  
  else {  
    monthAge--;  
    var dateAge = 31 + currentDate - dobDate;  

    if (monthAge < 0) {  
      monthAge = 11;  
      yearAge--;  
    }  }

    document.getElementById("desh1").innerHTML=yearAge;
    document.getElementById("desh2").innerHTML=monthAge;
    document.getElementById("desh3").innerHTML=dateAge;
}