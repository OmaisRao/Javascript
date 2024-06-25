var email=document.getElementById('email')
var password=document.getElementById('password')
var home_container=document.getElementById()
function loginuser() {
   if(!email.value || !password.value){return alert("Please Add Email or Password")} 

   localStorage.setItem('email', email.value)
}

