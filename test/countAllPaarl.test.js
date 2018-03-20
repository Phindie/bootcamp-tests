
describe('countAllPaarl function', function(){
  it('function called countAllPaarl that takes a parameter string with registration numbers', function(){
    var cjreg = "CJ"
    assert.equal(countAllPaarl(cjreg), 1);
  });
  it('Should return it is not from Paarl', function(){
      var cjreg = "CL"
    assert.equal(countAllPaarl(cjreg), false);
});
it('Should return the length of the registration from Paarl', function(){
  var cjreg = "CJ 345,CL 565, PL 952"
  assert.equal(countAllPaarl('CJ 345,CL 565, CJ 952'), 2);
 });
 });
