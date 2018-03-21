/**
 * @name:   jsindex.js
 * @desc:   Main Homepage
 */



(function () {

    var
        bannerPic   =   document.getElementById("bannerPic"),
        bannerArray =   [ "Images/silverbanner1.jpeg", "Images/silverbanner2.jpeg", "Images/silverbanner3.jpeg"],
        bannerIndex =   0,
        b1          =   document.getElementById("b1"),
        b2          =   document.getElementById("b2"),
        b3          =   document.getElementById("b3"),



      bindBtns      =   function () {

          b1.addEventListener("click", function () {

              bannerPic.src    =   "Images/silverbanner3.jpeg";
          }); //b1

          b2.addEventListener("click", function () {
              bannerPic.src    =   "Images/silverbanner2.jpeg";

          }); //b1


          b3.addEventListener("click", function () {
              bannerPic.src    =   "Images/silverbanner1.jpeg";
          }); //b1

      }, //bindBtns





     autoBanner     =   function () {

         bannerIndex++;

         if( bannerIndex >= bannerArray.length) {
             bannerIndex = 0;

         } //if

         bannerPic.setAttribute("src", bannerArray[ bannerIndex]);

         setTimeout(function () {
                autoBanner();
            }, 10000
         );


     }; //autoBanner






    function typeWriter() {
        $("#promoAd").typed({
            strings: ["Where Our Prices Are As Fair As Possible"],
            typeSpeed: 120
        });
    }//typeWriter







    init    =   function () {

        bindBtns();
        autoBanner();
        typeWriter();

    } //init


    ;

    window.addEventListener("load", init);

})();