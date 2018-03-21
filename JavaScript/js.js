

/*-------------------------------- Quote of Day ------------------*/

(function () {

    var

        myQuote         =   document.querySelector("#quoteDayP"),
        quotes      =   ["If you really want to do something, you will found a way",
            "Beautiful roads often lead to beautiful destinations", "Don't call it a dream, call it a plan", "It always seems impossible until its done", "5"],
        index           =   0;


        function changeQuoteAuto() {
                    /*if (index < quotes.length -1) {
                        index++;


                    } else {
                        index = 0;


                    }//if*/
                    index = Math.floor(Math.random()*quotes.length);

            myQuote.innerHTML = quotes[index];

        }//changeQuoteAuto


/*------------------------Tabs-----------------------------------------------*/

    function setTabs() {
        $( "#tabs" ).tabs();
    }//setTabs





/*------------------------PopUp Portfolio-----------------------------------------------*/


    function boxPop() {
        $("#work")
            .colorbox({
                inline: true,
                width: 400,
                height: 200
            });
    }//boxPop



/*------------------------scrolldown-----------------------------------------------*/


    function activateScrollDown() {
        $(".navTop").on("click",
            // capturing the event
            function(evt){
                // disabling anchors default behaviour
                evt.preventDefault();

                // fetching the element we clicked on
                console.log( $(this).attr("href") );


                var t = $(this).attr("href");


                //animating the whole content of the website
                $("html, body").animate(
                    // object with params
                    {
                        "scrollTop" :
                        $(t)
                            .offset().top -100
                    },
                    // duration
                    1000

                );
            }
        );
    }//activateScrollDown


/*--------------------------------Type Writer----------------------------------------------------*/


    function typeWriter() {
        $("#greetings").typed({
            strings: ["Greetings!"],
            typeSpeed: 550
        });
    }//typeWriter





/*------------------------Initialise Function-----------------------------------------------*/




    function init() {
        setInterval(changeQuoteAuto, 1000*60*20);
        boxPop();
        setTabs();
        activateScrollDown();
        typeWriter(); 
    }//init

    window.addEventListener("load", init);






}) ();



















