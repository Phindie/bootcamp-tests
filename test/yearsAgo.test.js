describe('yearsAgo function', function(){
  it('Should return exactly the years ago that was  ', function(){
    var year = "18"
    assert.equal(yearsAgo(year), 2000);
  });
    it('Should return the third year back', function(){
      var year = "3"
        assert.equal(yearsAgo(year), 2015);
});
it('should recognise that it is not a year and return that', function(){
    assert.notEqual(yearsAgo('monthly'), 'Not a year');
  });
});
