(function () {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */


    // var planetsString2 = "Mercury <br> Venus <br> Earth <br> Mars <br> Jupiter <br> Saturn <br> Uranus <br> Neptune";
    //
    // console.log(planetsString2)

    const planetWithBreaks = planetsArray.join("<br>");
    console.log(planetWithBreaks);

    // let htmlString = "<ul><li>Mercury</li><li>Venus</li><li>Earth</li><li>Mars</li><li>Jupiter</li><li>Saturn</li><li>Uranus</li><li>Neptune</li></ul>";

    let planetsList = planetsArray.join("</li><li>");

    planetsList = "<ul><li>" + planetsList + "</li></ul>"

    document.body.innerHTML = planetsList;

})();
