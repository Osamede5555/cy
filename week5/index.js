//button click interaction
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("dynamicText").innerHTML = "This is a Javascript functionality web page by Osamede Cynthia";
});


//form submission interaction
document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    document.getElementById("result").innerHTML = `Hello, ${name}! Thank you for submitting the form,`;
});