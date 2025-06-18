document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if (name && message) {
        alert("Thank you for your message, " + name + "!");
        document.getElementById("name").value = '';
        document.getElementById("message").value = '';
    } else {
        alert("Please fill in both fields.");
    }
});
