document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('send').addEventListener('click', function() {
        let showMessage = document.getElementById('aparecer');

        if(showMessage.style.display === "none") {
            showMessage.style.display = "block"
        } else {
            showMessage.style.display = "none"
        }
    })
})