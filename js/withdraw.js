document.getElementById('bankWithButton').addEventListener('click',function(){
    const withInputField=document.getElementById('bankWithdrawlInput');
   const withdrwaValue= withInputField.value;
   const convertWitdrawl=parseFloat(withdrwaValue);
   //console.log(convertWitdrawl);
   withInputField.value='';


   const divWithdraw=document.getElementById('withdrawlfirst');
   const divWithdrawText=divWithdraw.innerText;
   const convertWithdrawText=parseFloat(divWithdrawText);
  //  const totalWth=convertWithdrawText+ convertWitdrawl;
  //  divWithdraw.innerText=totalWth;
   
   
   const balanceId=document.getElementById('balance');
   const balanceText=balanceId.innerText;
   const balTextConvert=parseFloat(balanceText);
   
   if(convertWitdrawl>balTextConvert){
    alert('not sufficient balance');
    return;
  }
  const totalWth=convertWithdrawText+ convertWitdrawl;
   divWithdraw.innerText=totalWth;
  
  const balaTotal= balTextConvert-convertWitdrawl;
  const convertBal=parseFloat(balaTotal);
  balanceId.innerText=convertBal;
})