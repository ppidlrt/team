

//infographics

var infoIndex = 1;
                        showInfos(slideIndex);
                        
                        function plusInfos(n) {
                            showInfos(slideIndex += n);
                        }
                        
                        function currentInfos(n) {
                          showInfos(slideIndex = n);
                        }
                        
                        function showInfos(n) {
                          var i;
                          var slides = document.getElementsByClassName("infographic-slides");
                          var dots = document.getElementsByClassName("infographic-dot");
                          if (n > slides.length) {slideIndex = 1}    
                          if (n < 1) {slideIndex = slides.length}
                          for (i = 0; i < slides.length; i++) {
                              slides[i].style.display = "none";  
                          }
                          for (i = 0; i < dots.length; i++) {
                              dots[i].className = dots[i].className.replace(" active", "");
                          }
                          slides[slideIndex-1].style.display = "block";  
                          dots[slideIndex-1].className += " active";
                        }