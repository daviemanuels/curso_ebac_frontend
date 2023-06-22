// let button = document.getElementById('send');

// button.addEventListener('click', function() {

//     let showMessage = document.getElementById('aparecer');

//     if(showMessage.style.display === "none") {
//         showMessage.style.display = "block"
//     } else {
//         showMessage.style.display = "none"
//     }
// })

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('send').addEventListener('click', function() {

        document.querySelector('#aparecer').style.display = 'block';
    })
})