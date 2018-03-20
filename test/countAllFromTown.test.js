describe('countAllFromTown function', function(){
  it(' The function that takes a string parameter with reg numbers  ', function(){

    assert.equal(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CY'), 1);
  });
  it('Should return the message that its not from that town  ', function(){
    var creg = "JL"
    assert.equal(countAllFromTown('creg'), false);
});
});
