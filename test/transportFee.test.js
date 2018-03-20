describe('transportFee function', function(){
  it('The function that returns the right price based on the shift you are working', function(){
    var shift = "morning"
    assert.equal(transportFee('morning'), "R20");
  });

  it('Should return the message, is not a shift', function(){
    assert.equal(transportFee('Pindi'), "free")
});
it('Should return the message, is not a shift', function(){
  assert.equal(transportFee('monthly'), "free")
});
});
