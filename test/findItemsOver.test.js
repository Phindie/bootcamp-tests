describe('findItemsOver function', function(){

      it('The function should return products that have quantity less than the threshold.', function(){
        var threshold = 20
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        assert.notEqual(findItemsOver20(itemList, threshold),4);
        });

 it('Should not return the list that is less than 20 ', function(){
     var threshold = 7;
      assert.deepEqual(findItemsOver('list'), []);
  });
})
