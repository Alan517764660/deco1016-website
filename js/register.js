function checkinput() {
var name = $('input[name="adminNo"]').val();
var phone_x = $('input[id="phone_x"]').val();
var randCode = $('input[id="randCode"]').val();
var password = $('input[id="password"]').val();
var rePassword = $('input[id="rePassword"]').val();
var Safety = $('input[id="Safety"]').val();
var gj = $('select[id="gj"]').val();
if(name.length<6)
{
alert('Please type correct user name')
}

else if(phone_x.length<10)
{
alert('Please type correct phone number')
}

else if(password.length<6)
{
alert('Please type the right form of password')
}

else if(rePassword.length<1)
{
alert('Please type the correct password again')
}

else if(password!=rePassword)
{
alert('Passwords are different')
}

else if(Safety.length<6)
{
alert('Please type the correct security code')
}

else if(gj.length<1)
{
alert('Please choose your country')
}

else if(randCode.length<4)
{
alert('Please type the correct verify code')
}
else
{
window.location.href="Question.html";  	
}
}

function checkinput2() {
var an1 = $('select[id="an1"]').val();
var an2 = $('select[id="an2"]').val();
var an3 = $('select[id="an3"]').val();
if(an1.length<1)
{
alert('Please fill the security question 1')
}

else if(an2.length<1)
{
alert('Please fill the security question 2')
}

else if(an3.length<1)
{
alert('Please fill the security question 3')
}

else
{
window.location.href="sec.html";  	
}
}

function ch(id){
var g1=document.getElementById("password").type;
var g2=document.getElementById("rePassword").type;
var g3=document.getElementById("Safety").type;
  if (id == 'ch1' )
  {
	  if (g1=='text')
	  {
	  document.getElementById("password").type ='password' ;
	   document.getElementById("p1").className ='showpwd' ;
	  }
	  else
	   {
	  document.getElementById("password").type ='text' ;
	   document.getElementById("p1").className +=' hidepwd' ;
	  }
	  
  }


  if (id == 'ch2' )
  {
	  if (g2=='text')
	  {
	  document.getElementById("rePassword").type ='password' ;
	   document.getElementById("p2").className ='showpwd' ;
	  }
	  else
	   {
	  document.getElementById("rePassword").type ='text' ;
	   document.getElementById("p2").className +=' hidepwd' ;
	  }
	  
  }
  
  
  if (id == 'ch3' )
  {
	  if (g3=='text')
	  {
	  document.getElementById("Safety").type ='password' ;
	   document.getElementById("p3").className ='showpwd' ;
	  }
	  else
	   {
	  document.getElementById("Safety").type ='text' ;
	   document.getElementById("p3").className +=' hidepwd' ;
	  }
	  
  }

}
