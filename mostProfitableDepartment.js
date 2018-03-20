function mostProfitableDepartment(deptsales){
  var hardwareSales = 0;
  var carpentrySales = 0;
  var outdoorSales = 0;

  for(var i=0; i < deptsales.length; i++){
    var listItem = deptsales[i];
    var dept = listItem.department;
    switch(dept){
      case 'hardware':
        hardwareSales += listItem.sales;
        break;
      case 'outdoor':
        outdoorSales += listItem.sales;
        break;
      case 'carpentry':
        carpentrySales += listItem.sales;
        break;
    }
  }

  var deptList = [];
  deptList.push(hardwareSales, outdoorSales, carpentrySales);

  var salesObject = [];

  for(var i=0; i<deptList.length; i++){
    var deptName = deptsales[i].department;
    var sales = deptList[i];
    salesObject.push({deptName, sales});
  }

  var count = 0;
  var bigSale = salesObject[0].sales;
  for (i=1; i < salesObject.length; i++){
  	if(salesObject[i].sales >= bigSale){
      bigSale = salesObject[i].sales;
      count +=1;
    }
  }
  return salesObject[count].deptName;
}
