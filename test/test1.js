/**
 * Created by harshilkumar on 1/25/17.
 */

var calc;

//This will be called before running each spec

beforeEach(function() {
    calc = new MathUtils();
});
/*
describe("Wehn passing correct value it should form string.", function(){
    it("Should be able to compare the string", function() {
        expect(calc.sum(3,5)).toEqual(8);
    });
});

describe("when calc is used to peform basic math operations", function(){
    it("should be able to calculate sum of 3 and 5", function() {
        expect(calc.sum(3,5)).toEqual(8);
    });
});
*/

describe("when calc2 basic multiplication operations", function(){
    it("should be able to calculate multiply of 3 and 5", function() {
        expect(multimath(3,5)).toEqual(15);
    });
});

describe("Testing function", function(){
    it("function should return the expected srring", function() {
        var testVar = concatstring("my");
        expect(testVar).toEqual("my-my");
    });
});

describe("Testing callback function", function(){

    it("function should return the expected srring", function() {
        test_func(5,15, function(val){
            expect(val).toEqual(100);
        });
    });
});


it("Test Alert Box Message For Change Modal", function() {
    var testVar = true;
    expect(testVar).toEqual(true);
});



describe("testing html dom element", function(){
    //Spec for sum operation
    it("It should match the value", function() {
        var fixture = setFixtures('<div class="post">foo</div>');
        var post = fixture.find('.post');
        console.log(post);
        expect(fixture).toContainText('foo');
            //expect($('<div class="some-class"></div>')).toHaveClass("some-class");
    });
});


