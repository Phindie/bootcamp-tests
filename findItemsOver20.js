var findItemsOver20 = function(itemList){
  var list = [];
  // look through the list
  for(var i=0;i<itemList.length;i++){
    if(itemList[i].qty > 20){
      list.push(itemList[i]);
    }
  }
  return list;
}
