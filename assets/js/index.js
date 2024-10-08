
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();


        const name = document.getElementById("inputName").value.trim();
        const email = document.getElementById("inputEmail").value.trim();
        const message = document.getElementById("inputMessage").value.trim();


        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        var form = event.target;
        var status = document.getElementById("status");


        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Your message has been sent successfully!";
                form.reset();
            } else {
                status.innerHTML = "Oops! There was a problem sending your message.";
            }
        }).catch(error => {
            status.innerHTML = "Oops! There was a problem sending your message.";
        });
    });
});