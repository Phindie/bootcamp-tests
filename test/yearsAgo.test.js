describe('yearsAgo function', function(){
  it('function called countAllPaarl that takes a parameter string with registration numbers', function(){
    var year = "18"
    assert.equal(yearsAgo(year), 2000);
  });
    it('Should return the third year back', function(){
      var year = "3"
        assert.equal(yearsAgo(year), 2015);
});
});
