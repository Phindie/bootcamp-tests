describe('countRegNumber function', function(){
  it('The function that takes in a string parameter', function(){
    var number = "CA 234"
    assert.equal(countRegNumber(number), true);
  });
it('Should return the lenght of the parameter', function(){
assert.equal(countRegNumber('CA 3455, LC 854, PL 526, GC'), 4);
});
});
