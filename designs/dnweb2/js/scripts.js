document.onreadystatechange = function() {
        if (document.readyState == "complete") {

            // Preload images    
            var images = [];

            function preload() {
                for (var i = 0; i < arguments.length; i++) {
                    images[i] = new Image();
                    images[i].src = preload.arguments[i];
                }
            }
            preload(
                "img/dev1.png",
                "img/dev2.png",
                "img/dev3.png",
                "img/dev4.png",
            )

            function checkURL(url) {
                return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
            }
            // End preload images

            let myMenu = document.getElementById("burger");
            let myMenuBody = document.getElementById("menuBody");
            myMenu.style.opacity = "1";


            // =============================================================================
            // Technology section
            // =============================================================================
            let s2 = document.getElementById("s2");
            let s3 = document.getElementById("jobs");
            let s4 = document.getElementById("s4");
            let s5 = document.getElementById("s5");
            let s6 = document.getElementById("s6");

            let tech = document.getElementById("tech"); // Tech container

            var myScrollFunc = function() {
                let s1Pos = s1.getBoundingClientRect().top;
                let s1PosBottom = s1.getBoundingClientRect().bottom;
                let s2Pos = s2.getBoundingClientRect().top;
                let s2PosBottom = s2.getBoundingClientRect().bottom;
                let s3Pos = s3.getBoundingClientRect().top;
                let s3PosBottom = s3.getBoundingClientRect().bottom;
                let s4Pos = s4.getBoundingClientRect().top;
                let s4PosBottom = s4.getBoundingClientRect().bottom;
                let s5Pos = s5.getBoundingClientRect().top;
                let s5PosBottom = s5.getBoundingClientRect().bottom;
                let s6Pos = s6.getBoundingClientRect().top;
                let s6PosBottom = s6.getBoundingClientRect().bottom;

                // Change link state
                var navList = [].slice.call(document.querySelectorAll(".menuBody .links a"));

                if (s1Pos.toFixed() <= 1 && s1PosBottom.toFixed() > 1) {
                    navList[0].className = "active"
                } else {
                    navList[0].className = ""
                }
                if (s2Pos.toFixed() <= 1 && s2PosBottom.toFixed() > 1) {
                    navList[1].className = "active"
                } else {
                    navList[1].className = ""
                }
                if (s3Pos.toFixed() <= 1 && s3PosBottom.toFixed() > 1) {
                    navList[2].className = "active"
                } else {
                    navList[2].className = ""
                }
                if (s4Pos.toFixed() <= 1 && s4PosBottom.toFixed() > 1) {
                    navList[3].className = "active"
                } else {
                    navList[3].className = ""
                }
                if (s5Pos.toFixed() <= 1 && s5PosBottom.toFixed() > 1) {
                    navList[4].className = "active"
                } else {
                    navList[4].className = ""
                }
                if (s6Pos.toFixed() <= 1 && s6PosBottom.toFixed() > 1) {
                    navList[5].className = "active"
                } else {
                    navList[5].className = ""
                }
                if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 1) {
                    navList.forEach(function(links) {
                        links.classList.remove('active');
                    });
                    navList[6].className = navList[6].className += " active";
                } else {
                    navList[6].className = ""
                }

                if (s2Pos <= 1) {
                    myMenu.style.opacity = "1";
                    tech.className = "technology animation";
                } else if (window.innerWidth < 769) {
                    myMenu.style.opacity = "1";
                } else {
                    myMenu.removeAttribute('style');
                    myMenu.className = "burger hide";
                }

            };
            myScrollFunc();
            window.addEventListener("scroll", myScrollFunc);

            myMenu.addEventListener("click", function(e) {
                e.preventDefault();
                if (myMenu.className.match(/(?:^|\s)hide(?!\S)/)) {
                    myMenu.className = myMenu.className.replace(/(?:^|\s)hide(?!\S)/g, ' show');
                    myMenu.innerHTML = '<i class="material-icons-two-tone" id="menuicon">close</i>';
                    myMenuBody.className = myMenuBody.className.replace(/(?:^|\s)hide(?!\S)/g, ' show');
                } else {
                    myMenu.className = myMenu.className.replace(/(?:^|\s)show(?!\S)/g, ' hide');
                    myMenu.innerHTML = '<i class="material-icons-two-tone" id="menuicon">menu</i>';
                    myMenuBody.className = myMenuBody.className.replace(/(?:^|\s)show(?!\S)/g, ' hide');
                }
            });


            let navList = [].slice.call(document.querySelectorAll(".menuBody .links a"));
            for (let i = 0; i < navList.length; i++) {
                navList[i].addEventListener("click", function() {
                    myMenu.className = myMenu.className.replace(/(?:^|\s)show(?!\S)/g, ' hide');
                    myMenu.innerHTML = '<i class="material-icons-two-tone" id="menuicon">menu</i>';
                    myMenuBody.className = myMenuBody.className.replace(/(?:^|\s)show(?!\S)/g, ' hide');
                });
            }

            // =================================================================
            // Popups
            // =================================================================

            // Contact popup 
            let popup1 = document.getElementById("pop1");
            let close1 = document.getElementById("close1");
            let categories = document.getElementById("categories");
            categories.onclick = function() {
                popup1.className = popup1.className.replace(/(?:^|\s)hidden(?!\S)/g, ' popped');
                getValues();
            }
            close1.onclick = function() {
                popup1.className = popup1.className.replace(/(?:^|\s)popped(?!\S)/g, ' hidden');
            }


            // Contact popup 
            let popup2 = document.getElementById("pop2");
            let close2 = document.getElementById("close2");
            let submitcv = document.getElementById("submitcv");
            submitcv.onclick = function() {
                popup2.className = popup2.className.replace(/(?:^|\s)hidden(?!\S)/g, ' popped');
            }
            close2.onclick = function() {
                popup2.className = popup2.className.replace(/(?:^|\s)popped(?!\S)/g, ' hidden');
            }


            // Contact popup 
            let popup3 = document.getElementById("pop3");
            let close3 = document.getElementById("close3");
            let contact = document.getElementById("contact");
            contact.onclick = function() {
                popup3.className = popup3.className.replace(/(?:^|\s)hidden(?!\S)/g, ' popped');
            }
            close3.onclick = function() {
                popup3.className = popup3.className.replace(/(?:^|\s)popped(?!\S)/g, ' hidden');
            }

            function getValues() {
                let posvalue = document.getElementById("posvalue")
                let checkboxes =
                    document.getElementsByName('technology');

                let result = "";

                for (let i = 0; i < checkboxes.length; i++) {
                    if (checkboxes[i].checked) {
                        result += checkboxes[i].value + " / ";
                    }
                }
                posvalue.value = result;
            }

            // =============================================================================
            // Scroll to element
            // =============================================================================
            $(function() {
                $('a[href*="#"]:not([href="#"])').click(function() {
                    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        if (target.length) {
                            $('html, body').animate({
                                scrollTop: target.offset().top
                            }, 1500);
                            return false;
                        }
                    }
                });
            });

        } // End ov document.readyState
    } // End of document.readyState