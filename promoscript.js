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
        
        function openModal(title, period, location, details) {
            var modal = document.getElementById("promotionModal");
            var titleElement = document.getElementById("promotionTitle");
            var contentElement = document.getElementById("promotionContent");
            
            titleElement.innerText = title;
            contentElement.innerHTML = `
            <p><strong>Promotion Period:</strong> ${period}</p>
            <p><strong>Participating Location:</strong> ${location}</p>
            <p><strong>Terms & Conditions:</strong> ${details}</p>
            <button onclick="bookPromotion()">Book</button>
            `;
            
            modal.style.display = "block";
        }
        
        function bookPromotion() {
            alert("Booking the promotion. Add your booking logic here.");
        }

        function closeModal() {
            var modal = document.getElementById("promotionModal");
            modal.style.display = "none";
        }