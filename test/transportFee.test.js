describe('transportFee function', function(){
  it('The function that returns the right price based on the shift you are working', function(){
    var shift = "morning"
    assert.equal(transportFee('morning'), "R20");
  });

  it('should return R10 if you are working in the afternoon ', function(){
    assert.equal(transportFee('afternoon'),'R10');
  });
it('Should return free if you work a night shift', function(){
  assert.equal(transportFee('monthly'), "free")
});
});
