const inday=document.querySelector(".day");
const inmonth=document.querySelector(".month");
const inyear=document.querySelector(".year");
const buttonn=document.querySelector(".button");

const outday=document.querySelector(".DD");
const outmonth=document.querySelector(".MM");
const outyear=document.querySelector(".YY");

const day_small=document.querySelector(".derror");
const month_small=document.querySelector(".merror");
const year_small=document.querySelector(".yerror");

buttonn.addEventListener('click', calculate);
let isvalid=false;

inday.addEventListener('input',(e)=>{
  if(+inday.value>31){
    day_small.textContent="must be a valid date";
 isvalid=false;
 return;
  }
else{
  isvalid=true;
  day_small.textContent="";
}

if(+inday.value===0){
  isvalid=false;
  day_small.textContent="this field is required";
isvalid=false;
return;
}
else{
 day_small.textContent = "";
}

});

inmonth.addEventListener('input',(e)=>{
  if(+inmonth.value>12){
    month_small.textContent="must be a valid date";
 isvalid=false;
 return;
  }
else{
  isvalid=true;
  month_small.textContent="";
}

if(+inmonth.value===0){
  isvalid=false;
  month_small.textContent="this field is required";
isvalid=false;
return;
}
else{
  month_small.textContent = "";
}
});

inyear.addEventListener('input',(e)=>{
  if(+inyear.value>2023){
    year_small.textContent="must be a valid date";
 isvalid=false;
 return;
  }
else{
  isvalid=true;
  year_small.textContent="";
}

if(+inyear.value===0){
  isvalid=false;
  year_small.textContent="this field is required";
isvalid=false;
return;
}
else{
  year_small.textContent = "";
}
});


function calculate(){
  if(isvalid){
    let birthday = `${inmonth.value}/${inday.value}/${inyear.value}`;
    console.log(birthday);
    let birthdayObj = new Date(birthday);
    let ageDiffMill = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiffMill);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDay();
    // DISPLAYING EVERYTHING
    outday.textContent = ageDay;
    outmonth.textContent = ageMonth;
    outyear.textContent = ageYears;
  } else{
    alert("error");
  }

}








