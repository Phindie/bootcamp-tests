describe('findItemsOver20 function', function(){
  it('Should return the list of objects ', function(){
    assert.deepEqual(findItemsOver20([{name:"apples",qty:40},{name:"bananas",qty:13}]), [{"name":"apples","qty":40}]);
});
it('Should return nothing', function(){
  assert.deepEqual(findItemsOver20([{name:"apples",qty:13},{name:"bananas",qty:13}]), []);
});
});
