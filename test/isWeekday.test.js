describe('isWeekday function', function(){
  it('Should return true if its a weekday', function(){
    var  weekday= "Monday"
    assert.equal(isWeekday(weekday), true);
  });
  it('Should return false if it is not a weekday', function(){
    var  weekday= "Saturday"
    assert.equal(isWeekday(weekday), false);
});
});
