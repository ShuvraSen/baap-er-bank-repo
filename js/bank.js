// console.log("bank")
document.getElementById('bankDepositButton').addEventListener('click',function(){
   const depoInputValue =document.getElementById('bankDepositInput').value;
   const convertInputValue=parseFloat(depoInputValue);
  
   const depositTotalElement=document.getElementById('depositfirst');
   const preDepoTotal=depositTotalElement.innerText;
   const conCurr=parseFloat(preDepoTotal);
  const currenttotal=conCurr+convertInputValue;
 //const conCurr=parseFloat(currenttotal);
  depositTotalElement.innerText=currenttotal;
  // uporer line er mane- ami age j span tag ke dhorsi sei variable er moddhe amake pura total amount ta set korte hobe


   document.getElementById('bankDepositInput').value=''

    //console.log(typeof totalDepo);
    
    const balanceId=document.getElementById('balance');
    const balanceText=balanceId.innerText;
    const balTextConvert=parseFloat(balanceText);
   const balaTotal= balTextConvert+convertInputValue;
   const convertBal=parseFloat(balaTotal);
   balanceId.innerText=convertBal;



})