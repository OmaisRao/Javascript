function calculate(){
  var Name=document.getElementById('NAme').value;  
  var a=parseInt(document.getElementById("book1").value);
  var b=parseInt(document.getElementById("book2").value);
  var c=parseInt(document.getElementById("book3").value);
  var d=parseInt(document.getElementById("book4").value);
  var e=parseInt(document.getElementById("book5").value);

  if (a>100 || b>100 || c>100 || d>100 || e>100 || Name > 100) {
    alert("Please Enter Correct Value")
  }
   
   else{
    var obtain=a+b+c+d+e;
    document.getElementById('obtain').innerHTML=obtain;
     var NaMe=Name   
     document.getElementById('YOUR').innerHTML=NaMe;
     var per=obtain/500*100;
     document.getElementById('per').innerHTML=per;

   if (a>=40 && b>=40 && c>=40 && d>=40 && e>=40) {
    document.getElementById('remarks').innerHTML="<span style='color:#292'>Pass</span";
   }
   
   else {
    document. getElementById('remarks').innerHTML="<span style='color:red'>Fail</span>";
   }

   if(per >=80){
    document.getElementById('grade').textContent="A1"
   }

   else if(per >=70){
    document.getElementById('grade').textContent="A"
   }

 else  if(per >=60){
    document.getElementById('grade').textContent="B"
   }

  else if(per >=50){
    document.getElementById('grade').textContent="C"
   }

  else if(per >=40){
    document.getElementById('grade').textContent="D"
   }

 else  if(per >=30){
    document.getElementById('grade').textContent="E"
   }
  
   else{
    document.getElementById('grade').textContent="F"
   }
}
// return false;
}