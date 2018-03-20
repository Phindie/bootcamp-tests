describe('isFromBellville function', function(){
  it('function that returns true if a reg number is for Bellville', function(){
    var number = "CY"
    assert.equal(isFromBellville(number), true);
  });
it('Should return false the registration number is not for Bellville', function(){
assert.equal(isFromBellville("Phindi"), false);
});
});
