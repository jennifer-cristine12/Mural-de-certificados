
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
});
fetch("../data/list.json")
    .then(response => response.json())
    .then(data => {console.log(data) 

    })
    .catch(error => console.error(error));