/**
 * Created by harshilkumar on 1/31/17.
 */
/*
describe("call child function.", function(){
    var errobj;
    beforeEach(function() {
        errobj = new showFerror();
    });
    it("Should be able to validate the string all positive", function() {
        spyOn(errobj, "_get_nodeType");
        var $element = $("input");
        var _bColor = "blue";
        var _bSize = "2px"
        var string_format = "2px solid blue";
        expect(errobj._showErrFunc($element,_bColor, _bSize)).toEqual(string_format);
    });

});
*/
describe("Testing spies", function () {

    it("Should skip over the function being spied on", function () {
        // Arrange
        var myApp = new MyApp();
        spyOn(myApp, "setFlag");

        // Act
        // Should set flag to true, but it's spied on
        myApp.setFlag();

        // Assert
        // So the flag is still set to false
        expect(myApp.flag).toEqual(false);
    });

});
/*
describe("Wehn passing correct value to border it should form string.", function(){
    var errobj;
    beforeEach(function() {
        errobj = new err_n_icon();

    });
    // These below test cases are for testing border related functions

    it("Should be able to validate the string all positive", function() {
        var $element = $("input");
        var _bColor = "blue";
        var _bSize = "2px"
        var string_format = "2px solid blue";
        expect(errobj.showerror($element,_bColor, _bSize)).toEqual(string_format);
    });

    it("Should be able to validate the string if size in other unit", function() {
        var $element = $("input");
        var _bColor = "blue";
        var _bSize = "2rem"
        var string_format = "2px solid blue";
        expect(errobj.showerror($element,_bColor, _bSize)).toEqual(string_format);
    });
    it("Should be able to validate the string if color value is none", function() {
        var $element = $("input");
        var _bColor = null;
        var _bSize = "2rem"
        var string_format = "2px solid #b91717";
        expect(errobj.showerror($element,_bColor, _bSize)).toEqual(string_format);
    });
    it("Should be able to validate the string if both color and size values are none", function() {
        var $element = $("input");
        var _bColor = null;
        var _bSize = null
        var string_format = "1.5px solid #b91717";
        expect(errobj.showerror($element,_bColor, _bSize)).toEqual(string_format);
    });

    // These below test cases are for testing icon related functions /

    it("Should able to parse the correct icon related values", function () {
        var $element = $("input");
        var iconName = "fa-info-circle";
        var iconSize = "_medium";
        var iconColor = "orange";
        var iconPos = "left";
        var iconString = "fa-info-circle 20px orange left";
        expect(errobj.showIconError($element, iconName, iconSize, iconColor, iconPos)).toEqual(iconString);

    })
    it("Should able to parse the correct icon related values if there are empty values", function () {
        var $element = $("input");
        var iconString = "fa-info-circle 16px orange right";
        expect(errobj.showIconError($element, "fa-info-circle", null, "orange", "right")).toEqual(iconString);
    })

    it("Should able to parse the correct icon related values if there are null values", function () {
        var $element = $("input");
        expect(errobj.showIconError($element, "fa-info-circle", null, "", "right")).toEqual("fa-info-circle 16px  right");
    })

});
*/
/*
describe("Function call with element", function() {
    var errobj1;
    beforeEach(function() {
        errobj1 = new err_n_icon();
        var $element = $("input");
        $("input").showErrFunc();
    });
    it("calls the click() function", function() {

        //expect($("input").showErrFunc()).toHaveBeenCalled();

    });
});
*/


