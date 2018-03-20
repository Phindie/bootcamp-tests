describe('isWeekday function', function(){
  it('function called countAllPaarl that takes a parameter string with registration numbers', function(){
    var  weekday= "Monday"
    assert.equal(isWeekday(weekday), true);
  });
  it('Should return it is not a weekday', function(){
    var  weekday= "Saturday"
    assert.equal(isWeekday(weekday), false);
});
});
