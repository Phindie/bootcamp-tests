function totalPhoneBill(list){
   //var clist = [];
  var total = 0
  var calls = 0
  var sms = 0
  console.log(total);
  var splitList =list.split(",");
  for(var i=0; i<splitList.length; i++){
  var bill = splitList[i].trim();
    console.log(bill);
    if(bill.startsWith("c")){
    
      calls = calls + 2.75
      console.log(calls);
      }
     
      else if
        (bill.startsWith("s")){
        
      sms = sms + 0.65
      }
      
    
  }
  var totalbill = calls + sms;
  //converting a number into a string
  return "R" + totalbill.toFixed(2);  
}
  
