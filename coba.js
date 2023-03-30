function PushButton(){
    username=document.getElementById("username").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;

    PostSignUp(username,email,password);
    window.location.href = "./registdone.html"
  }
  
  function PostSignUp(username,email,password){
    var myHeaders = new Headers();
    myHeaders.append("Login", "jasmine");
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
    "username": username,
    "email": email,
    "password": password,
    });
  
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
  
    fetch("https://eoeon353ims2stx.m.pipedream.net", requestOptions)
    .then(response => response.text())
    .then(result => GetResponse(result))
    .catch(error => console.log('error', error));
  }
  
  function GetResponse(result){
    document.getElementById("formsignup").innerHTML = result;
}