describe('fromWhere function', function(){
  it('function that takes a car registration number as a parameter and returns the town the car is from', function(){
    var regNumber = "CY"

    assert.equal(fromWhere("CY,CJ,CA"), "Bellville");
});
it('It should recognise the town for the registration number ', function(){
assert.equal(fromWhere("CJ"), "Paarl");
});
it('Should recognise that the registration number is from Cape town', function(){
assert.equal(fromWhere("CA"), "Cape Town");
});
});
