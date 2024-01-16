function bookTicket(movieName) {
                    alert('You clicked on ' + movieName + '. Implement your booking logic here.');
        }

        function submitForm(event){
            event.preventDefault();
    
            document.getElementById("confirmationMessage").style.display = "none";
            document.getElementById("submit-enquiry").style.display = "none";
            document.getElementById("confirmationText").style.display = "block";
        }
    
    
        function myFunction(x) {
          x.classList.toggle("change");
        }  
    
        function toggleSearchBox() {
                var searchBox = document.getElementById("searchBox");
                searchBox.style.display = (searchBox.style.display === "none" || searchBox.style.display === "") ? "block" : "none";
            }

            let slideIndex = 1;
            showSlides(slideIndex);
            
            function plusSlides(n) {
                showSlides(slideIndex += n);
            }
            
            function currentSlide(n) {
                showSlides(slideIndex = n);
            }
            
            function showSlides(n) {
                let i;
                let slides = document.getElementsByClassName("mySlides");
                let dots = document.getElementsByClassName("dot");
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