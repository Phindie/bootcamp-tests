describe('totalPhoneBill function', function(){
  it('Should take in all calls made and sms sent', function(){
    var list = "bill"
    assert.equal(totalPhoneBill(list), "R0.00");
  });

it('Should Calculate the total bill for the data provided. ', function(){
  var list = "bill"
  assert.equal(totalPhoneBill('call, sms, call, sms, sms'), "R7.45");
});
});
