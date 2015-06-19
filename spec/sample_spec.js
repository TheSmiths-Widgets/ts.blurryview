/* Add Alloy in the global scope so that required module can have access */
this.Alloy = require("alloy"); this._ = Alloy._; this.Backbone = Alloy.Backbone;

var blurryView;

describe("The might be initialized with options", function () {
    beforeEach(function () {
        blurryView = Alloy.createWidget("ts.blurryview");
    });

    afterEach(function () {
        burryView = null;
    });


    it("Should raise an error when the background image is missing", function () {
        var init = function () {
            blurryView.init({
                foregroundImage: "",
                title: ""
            });
        };

        expect(init).toThrow();
    });

    it("Should raise an error when the foreground image is missing", function () {
        var init = function () {
            blurryView.init({
                backgroundImage: "",
                title: ""
            });
        };

        expect(init).toThrow();
    });

    it("Should raise an error when the title is missing", function () {
        var init = function () {
            blurryView.init({
                backgroundImage: "",
                foregroundImage: "",
            });
        };

        expect(init).toThrow();
    });

    it("Should be initialized with some parameters", function () {
        var init = function () {
            blurryView.init({
                title: "",
                backgroundImage: "",
                foregroundImage: "",
                subtitle: ""
            });
        };

        expect(init).not.toThrow();
    });
});
