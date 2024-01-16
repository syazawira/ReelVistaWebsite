    function submitForm(event){
        event.preventDefault();

        document.getElementById("confirmationMessage").style.display = "none";
        document.getElementById("submit-enquiry").style.display = "none";
        document.getElementById("confirmationText").style.display = "block";
    }


    function myFunction(x) {
      x.classList.toggle("change");
    }  

    function findUs() {
        window.location.href = 'https://maps.app.goo.gl/hDdhWJog9seUkqPb9';
    }

    function toggleSearchBox() {
            var searchBox = document.getElementById("searchBox");
            searchBox.style.display = (searchBox.style.display === "none" || searchBox.style.display === "") ? "block" : "none";
        }