        function submitForm(event){
            event.preventDefault();
    
            document.getElementById("confirmationMessage").style.display = "none";
            document.getElementById("submit-enquiry").style.display = "none";
            document.getElementById("confirmationText").style.display = "block";
        }
        
        function redirectToHomePage() {
          window.location.href = "home.html";
        }

        function myFunction(x) {
          x.classList.toggle("change");
        }  
    
        function toggleSearchBox() {
                var searchBox = document.getElementById("searchBox");
                searchBox.style.display = (searchBox.style.display === "none" || searchBox.style.display === "") ? "block" : "none";
            }