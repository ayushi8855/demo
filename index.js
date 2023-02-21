var btn = document.querySelector("form").addEventListener("submit",submit)

function submit(event){
    event.preventDefault()
    var name = document.getElementById("name").value
    var email= document.getElementById('email').value
    var mobile=document.getElementById('mobile').value
    var country=document.getElementById("country").value
    var obj={
        name_1:name,
        email_1:email,
        number:mobile,
        country_code:country
    }
    var mydata= JSON.stringify(obj)
    console.log(mydata)
   localStorage.setItem("data", mydata);
   webengage.user.login(email); //9SBOkLVMWvPX is the unique user identifier being used here
   webengage.user.setAttribute('we_email', email);
   webengage.user.setAttribute('we_phone', mobile);
//    window.location="thank.html"
webengage.track("talk to us" ,{
  "time":Date.now()
})
  
}
