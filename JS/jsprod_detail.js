/**
 * name     jsprod_detail
 * desc     product page
 */


(function () {

    var

        prodImg             =   document.getElementById("prodImg"),
        miniProdImg1        =   document.getElementById("miniProdImg1"),
        miniProdImg2        =   document.getElementById("miniProdImg2"),
        miniProdImg3        =   document.getElementById("miniProdImg3"),
        imgGallery          =   ["Images/6125-m.jpg"],

    bindImgBtns     =   function () {

        miniProdImg1.addEventListener("click",  function () {

            prodImg.src = imgGallery[0];

        }); //miniProdImg1

        miniProdImg2.addEventListener("click",  function () {

            prodImg.src = imgGallery[0];

        }); //miniProdImg1

        miniProdImg3.addEventListener("click",  function () {

            prodImg.src = imgGallery[0];

        }); //miniProdImg1

    }, //bindImgBtns







    init    =   function () {
       bindImgBtns();
    } //init


    ;

    window.addEventListener("load", init);

})();