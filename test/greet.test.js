describe('greet function', function(){
  it('should return Hello Jenine', function(){
    var name = "Jenine"
    assert.equal(greet(name), 'Hello, Jenine');
  });
 it('Should return Hello new world! ', function(){
   var name = "new world!"
   assert.equal(greet(name), 'Hello, new world!');
});
});
