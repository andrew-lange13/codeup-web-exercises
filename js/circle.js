(function() {
    "use strict";

    // create a circle object
    const circle = {
        radius: 3,

        getArea: function () {
            return Math.PI * (this.radius ** 2); // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.


            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value


            if (doRounding){
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea()));
            } else{
                console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea())
        }
    }}

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();



