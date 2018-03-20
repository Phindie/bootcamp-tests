var findItemsOver = function(itemlist, thre){
  var listOne = [];
  // look through the list
  for (var i=0;i<itemlist.length;i++){
    if(itemlist[i].qty > thre) {
      listOne.push(itemlist[i]);
    }
  }
  return listOne;
}
