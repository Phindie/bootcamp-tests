function countAllFromTown(number,town){
  console.log(number)
   var creg1 = [];
  //split string to an array
  var reg = number.split(",");

  for(var i = 0; i<reg.length; i++){
    //trim the whitespaces
    var num = reg[i].trim();
    if(num.startsWith(town)){
    console.log(num);
    creg1.push(num);
    }
  }
 return creg1.length;
}
