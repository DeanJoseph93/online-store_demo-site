/**
 * @name:   jsmenprod.js
 * @desc:   Men Products
 */


(function () {


    var

        num            =   document.getElementById("num"),
        name            =   document.getElementById("name"),
        movinText       =   document.getElementById("movinTitle"),
        topMargin       =   0,
        saleIndex       =   0,
        saleTextRandom  =   document.getElementById("saleNow"),
        saleTextArray   =   ["20% OFF ALL MEN'S PRODUCTS", "Why Not and Purchase", "Price no-one can match"],
        flashTextWork   = false,




        typeRandom      =   function () {

            /*saleIndex   =   Math.floor(Math.random()*saleTextArray.length);

            saleTextRandom.innerHTML = saleTextArray[saleIndex];*/

            if (saleIndex < saleTextArray.length -1) {
                saleIndex++;
            } else {
                saleIndex = 0;
            }
            saleTextRandom.innerHTML = saleTextArray[saleIndex];
        }, //typeRandom

        

        


        movinTextDown       =       function () {

            if(topMargin < 75){
                topMargin += 5;
                movinText.style.display = "block";
                movinText.style.top = topMargin + "px";
                
            }

            setTimeout(
                function () {
                    movinTextDown();
                },
                100
            )

        }, //movinText





       /* flashText           =       function () {

            if (topMargin == 75){
                movinText.style.display = "block";
            } else {

                flashTextOn();
            }
            setTimeout(
                function () {
                    flashText();
                },
            1000
            );

        }, //flashText




        flashTextOn     =   function () {

            if (topMargin == 75) {
                movinText.style.display = "none";
            }else {
                movinText.style.display = "block";

            }
            setInterval(
                function () {
                    flashTextOn();
                },
                1000
            )
        }, //flashTextON*/






    init    =   function () {
        movinTextDown();
        setInterval(typeRandom, 3000);

        /*bindBtns();*/
        /*flashText();*/
    }//init

    ;





    window.addEventListener("load", init);

})();

