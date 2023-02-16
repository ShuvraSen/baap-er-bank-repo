//add click event for submit button
document.getElementById('loginButton').addEventListener('click',function(){
    //console.log('clicked')
    const emailLoginInput=document.getElementById('emailInput').value;
    const passwordLoginInput=document.getElementById('passwordInput').value;
    if(emailLoginInput==='shuvra@g.com' && passwordLoginInput==='1234'){
        window.location.href='bank.html'
    }else{
        alert('this is invalid') 
    }
})