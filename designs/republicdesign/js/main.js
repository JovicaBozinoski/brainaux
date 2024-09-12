document.onreadystatechange = function () {
    if (document.readyState == "complete") {

        var wrap = document.getElementById("wrap");
        wrap.className = wrap.className.replace(/(?:^|\s)visibility(?!\S)/g, 'animated fadeInDown');

        // Preload images    
        var images = [];

        function preload() {
            for (var i = 0; i < arguments.length; i++) {
                images[i] = new Image();
                images[i].src = preload.arguments[i];
            }
        }
        preload(
            "img/bg.jpg",
            "img/black.jpg",
            "img/tb.png",
            "img/tw.png",
            "img/s1/00.jpg",
            "img/s1/01.jpg",
            "img/s1/01h.jpg",
            "img/s1/02.jpg",
            "img/s1/02a.jpg",
            "img/s1/02h.jpg",
            "img/s1/03.jpg",
            "img/s1/03h.jpg",
            "img/s2/01.jpg",
            "img/s2/02.jpg",
            "img/s2/03.jpg",
            "img/s3/bg.jpg",
            "img/s3/bg.png",
            "img/s3/01.jpg",
            "img/s3/02.jpg",
            "img/s3/03.jpg",
            "img/s3/04.jpg",
            "img/s3/05.jpg",
            "img/s4/01.jpg",
            "img/s4/02.jpg",
            "img/s4/03.jpg",
            "img/s5/bg.jpg",
            "img/s5/01.jpg",
            "img/s5/02.jpg"
        )
        // End preload images

        console.log('Document is ready.'); // Test if the page is loaded

        // Loop images and titles in slider

        var loopimg = document.getElementById("loopImages");
        var titles = [].slice.call(document.querySelectorAll(".slider h1"));
        var arrows = [].slice.call(document.querySelectorAll("#loopImages a"));

        for (var i = 0; i < arrows.length; i++) {
            (function (index) {
                arrows[i].onclick = function () {
                    loopImages();
                    clearInterval(myTimer);
                }
            })(i);
        }

        function loopImages() {
            if (loopimg.className.match(/(?:^|\s)animated fadeIn sliderimg(?!\S)/)) {
                loopimg.className = loopimg.className.replace(/(?:^|\s)sliderimg(?!\S)/g, ' sliderimg2');
                titles[0].className = titles[0].className.replace(/(?:^|\s)fadeInDown(?!\S)/g, ' hidden');
                titles[1].className = titles[1].className.replace(/(?:^|\s)hidden(?!\S)/g, ' fadeInDown');
            } else if (loopimg.className.match(/(?:^|\s)sliderimg2(?!\S)/)) {
                loopimg.className = loopimg.className.replace(/(?:^|\s)sliderimg2(?!\S)/g, ' sliderimg3');
                titles[1].className = titles[1].className.replace(/(?:^|\s)fadeInDown(?!\S)/g, ' hidden');
                titles[2].className = titles[2].className.replace(/(?:^|\s)hidden(?!\S)/g, ' fadeInDown');
            } else {
                loopimg.className = loopimg.className.replace(/(?:^|\s)sliderimg3(?!\S)/g, ' sliderimg');
                titles[0].className = titles[0].className.replace(/(?:^|\s)hidden(?!\S)/g, ' fadeInDown');
                titles[1].className = titles[2].className.replace(/(?:^|\s)fadeInDown(?!\S)/g, ' hidden');
                titles[2].className = titles[2].className.replace(/(?:^|\s)fadeInDown(?!\S)/g, ' hidden');
            }
        }

        var myTimer = setInterval(loopImages, 5000);

        // Footer get year
        var d = new Date();
        var n = d.getFullYear();
        var year = document.getElementById('year');
        year.innerHTML = n;
        // End footer get year

        // Detect if the content is overflowing

        function overFlow() {
            var flow = document.getElementsByClassName("flow"); // Container
            var f = document.getElementsByClassName("flowimg"); // Image
            var f2 = document.getElementsByClassName("flowp"); // Paragraph
            var f3 = document.getElementsByClassName("flowi"); // Icon

            // Get element heights, and apply the highest number

            var dArray = []; // Holder of Containers heights dimensions            

            for (var i = 0; i < flow.length; i++) {
                var el = flow[i];
                var d = el.clientHeight;
                dArray.push(d); // Put heights in the dArray
            }
            console.log(dArray);

            // Sort heights from highest to lowest

            var dArray1 = dArray.slice(0, 3);
            dArray1.sort(function (a, b) {
                return b - a
            });

            // Sort heights from highest to lowest

            var dArray2 = dArray.slice(3, 6);
            dArray2.sort(function (a, b) {
                return b - a
            });

            console.log(dArray1[0]); // Largest number of the first three elements
            console.log(dArray2[0]); // Largest number of the second three elements

            // Devide array in two arrays x 3 elements
            var eArray1 = []; // First array holder / 3 elements
            var eArray2 = []; // Second array holder / 3 elements

            // Pushh elements array in to the array holders above
            for (var i = 0; i < flow.length; i++) {
                var el = flow[i];
                eArray1.push(el);
                eArray2.push(el);
            }
            // Devide whole array in to two parts
            var eArray11 = eArray1.slice(0, 3); // First three elements
            var eArray22 = eArray2.slice(3, 6); // Last three elements

            // Insert largest height to the first three elements
            for (var i = 0; i < eArray11.length; i++) {
                var el = eArray11[i];
                el.setAttribute("style", "height:" + dArray1[0] + "px;");
            }
            // Insert largest height to the last three elements
            for (var i = 0; i < eArray22.length; i++) {
                var el = eArray22[i];
                el.setAttribute("style", "height:" + dArray2[0] + "px;");
            }
        };
        // End detect if the content is overflowing

        // Navigation functionality

        var navList = document.querySelectorAll(".navList li");
        var nodesArray = [].slice.call(document.querySelectorAll(".table"));

        for (var i = 0; i < navList.length; i++) {
            (function (index) {
                navList[i].onclick = function () {
                    for (var x = 0; x < nodesArray.length; x++) {
                        if (nodesArray[x].className.match(/(?:^|\s)hidden(?!\S)/)) {
                            console.log("It has hidden class");
                        } else {
                            nodesArray[x].className = nodesArray[x].className += " hidden";
                        }
                    }
                    for (var i = 0; i < navList.length; i++) {
                        navList[i].className = navList[i].className.replace(/(?:^|\s)active(?!\S)/g, '');
                    }
                    if (this.className.match(/(?:^|\s)active(?!\S)/)) {
                        this.className = this.className.replace(/(?:^|\s)active(?!\S)/g, '');
                    } else {
                        this.className += "active";
                    }
                    nodesArray[index].className = nodesArray[index].className.replace(/(?:^|\s)hidden(?!\S)/g, '');
                }
            })(i);
        }

        // End navigation functionality

        overFlow();
        for (var x = 0; x < nodesArray.length; x++) {
            nodesArray[x].className = nodesArray[x].className += " hidden";
            nodesArray[0].className = nodesArray[0].className.replace(/(?:^|\s)hidden(?!\S)/g, '');
        }

        // S1 

        var projects = document.getElementById("projects");
        var nav = [].slice.call(document.querySelectorAll(".nav"));

        projects.onclick = function () {
            for (var i = 0; i < navList.length; i++) {
                navList[i].className = navList[i].className.replace(/(?:^|\s)active(?!\S)/g, '');
            }
            for (var x = 0; x < nodesArray.length; x++) {
                nodesArray[x].className = nodesArray[x].className += " hidden";
            }
            for (var x = 0; x < nav.length; x++) {
                nav[x].className = nav[x].className += " altnav";
            }
            nodesArray[3].className = nodesArray[3].className.replace(/(?:^|\s)hidden(?!\S)/g, '');
            navList[3].className = navList[3].className += "active";
        }

        // Popup

        var popup = document.getElementById("pop");
        var body = document.getElementById("body");

        var popupcont = document.getElementById("popupcont"); // Popup content

        // Close button

        var close = document.getElementById("close");

        close.onclick = function () {
            popup.className = popup.className.replace(/(?:^|\s)fadeIn(?!\S)/g, ' fadeOut');
            body.className = body.className.replace(/(?:^|\s)noscroll(?!\S)/g, '');
            setTimeout(function () {
                popup.className = "popup animated fadeIn hidden";
            }, 1000);
        }

        // S1 Content

        var s2a = document.getElementById("s2a")
        var s2ac = document.getElementById("s2ac")
        s2ac.onclick = function () {
            popupcont.innerHTML = s2a.innerHTML;
            popup.className = popup.className.replace(/(?:^|\s)hidden(?!\S)/g, '');
            popupcont.scrollTop = 0;
            body.className = body.className += " noscroll";
        }

        var s2b = document.getElementById("s2b")
        var s2bc = document.getElementById("s2bc")
        s2bc.onclick = function () {
            popupcont.innerHTML = s2b.innerHTML;
            popup.className = popup.className.replace(/(?:^|\s)hidden(?!\S)/g, '');
            popupcont.scrollTop = 0;
            body.className = body.className += " noscroll";
        }

        var s2c = document.getElementById("s2c")
        var s2cc = document.getElementById("s2cc")
        s2cc.onclick = function () {
            popupcont.innerHTML = s2c.innerHTML;
            popup.className = popup.className.replace(/(?:^|\s)hidden(?!\S)/g, '');
            popupcont.scrollTop = 0;
            body.className = body.className += " noscroll";
        }

        // S3 Content

        var s3a = document.getElementById("s3a")
        var s3ac = document.getElementById("s3ac")
        s3ac.onclick = function () {
            popupcont.innerHTML = s3a.innerHTML;
            popup.className = popup.className.replace(/(?:^|\s)hidden(?!\S)/g, '');
            popupcont.scrollTop = 0;
            body.className = body.className += " noscroll";
        }
        var s3b = document.getElementById("s3b")
        var s3bc = document.getElementById("s3bc")
        s3bc.onclick = function () {
            popupcont.innerHTML = s3b.innerHTML;
            popup.className = popup.className.replace(/(?:^|\s)hidden(?!\S)/g, '');
            popupcont.scrollTop = 0;
            body.className = body.className += " noscroll";
        }
        var s3c = document.getElementById("s3c")
        var s3cc = document.getElementById("s3cc")
        s3cc.onclick = function () {
            popupcont.innerHTML = s3c.innerHTML;
            popup.className = popup.className.replace(/(?:^|\s)hidden(?!\S)/g, '');
            popupcont.scrollTop = 0;
            body.className = body.className += " noscroll";
        }
        var s3d = document.getElementById("s3d")
        var s3dc = document.getElementById("s3dc")
        s3dc.onclick = function () {
            popupcont.innerHTML = s3d.innerHTML;
            popup.className = popup.className.replace(/(?:^|\s)hidden(?!\S)/g, '');
            popupcont.scrollTop = 0;
            body.className = body.className += " noscroll";
        }
        var s3e = document.getElementById("s3e")
        var s3ec = document.getElementById("s3ec")
        s3ec.onclick = function () {
            popupcont.innerHTML = s3e.innerHTML;
            popup.className = popup.className.replace(/(?:^|\s)hidden(?!\S)/g, '');
            popupcont.scrollTop = 0;
            body.className = body.className += " noscroll";
        }

        // S4 Content

        var s4a = document.getElementById("s4a")
        var s4ac = document.getElementById("s4ac")
        s4ac.onclick = function () {
            popupcont.innerHTML = s4a.innerHTML;
            popup.className = popup.className.replace(/(?:^|\s)hidden(?!\S)/g, '');
            popupcont.scrollTop = 0;
            body.className = body.className += " noscroll";
        }
        var s4b = document.getElementById("s4b")
        var s4bc = document.getElementById("s4bc")
        s4bc.onclick = function () {
            popupcont.innerHTML = s4b.innerHTML;
            popup.className = popup.className.replace(/(?:^|\s)hidden(?!\S)/g, '');
            popupcont.scrollTop = 0;
            body.className = body.className += " noscroll";
        }
        var s4c = document.getElementById("s4c")
        var s4cc = document.getElementById("s4cc")
        s4cc.onclick = function () {
            popupcont.innerHTML = s4c.innerHTML;
            popup.className = popup.className.replace(/(?:^|\s)hidden(?!\S)/g, '');
            popupcont.scrollTop = 0;
            body.className = body.className += " noscroll";
        }

    } // End ov document.readyState
} // End of document.readyState