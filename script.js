
/* ADAM FURNITURE WORKSHOP */

// AUTOMATICALLY DISPLAY 36 FURNITURE IMAGES

const gallery = document.getElementById("gallery");

if (gallery) {
    for (let i = 1; i <= 36; i++) {

        const item = document.createElement("div");

        item.className = "gallery-item";

        item.innerHTML = `
            <img src="images/image${i}.jpg"
                 alt="Furniture product ${i}">

            <h3>Furniture Design ${i}</h3>
        `;

        gallery.appendChild(item);
    }
}

// CONTACT FORM ACTION

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = form.elements["name"].value;
        const phone = form.elements["phone"].value;
        const email = form.elements["email"].value;
        const request = form.elements["requestType"].value;
        const message = form.elements["message"].value;

        const whatsappNumber = "2567XXXXXXXX";

        if (whatsappNumber.includes("X")) {
            alert("Thank you " + name +
            ". Please configure Adam's WhatsApp number first.");
            return;
        }

        const text =
            "Hello Adam Furniture Workshop\n" +
            "Name: " + name + "\n" +
            "Phone: " + phone + "\n" +
            "Email: " + email + "\n" +
            "Request: " + request + "\n" +
            "Message: " + message;

        const link =
            "https://wa.me/" + whatsappNumber +
            "?text=" + encodeURIComponent(text);

        window.open(link, "_blank");

    });
}

console.log("Adam Furniture Workshop website loaded successfully.");
