describe('regCheck function', function(){
  it('The function regCheck that can check if a registration number is for GP, L, EC, MP', function(){
    var regNumber = "GP"
    assert.equal(regCheck(regNumber), "");
  });

  it('Should print the message is not for GP, L, EC, MP', function(){
    assert.equal(regCheck('GP, L, EC, MP'), false);
 });

});
