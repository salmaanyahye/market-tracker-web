const form = document.getElementById("priceForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = productName.value.trim();
    const price = Number(productPrice.value);

    // Empty check
    if (!name || productPrice.value === "") {
        alert("Fadlan dhammaan buuxi");
        return;
    }

    // Name should not contain numbers
    if (/\d/.test(name)) {
        alert("Product name tiro lama oggola");
        return;
    }

    // Price should not be negative
    if (price < 0) {
        alert("Qiimaha negative lama oggola");
        return;
    }

    priceTable.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${price}</td>
        </tr>
    `;
    const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Fadlan dhammaan fields buuxi");
        return;
    }

    if (/\d/.test(name)) {
        alert("Magaca tiro lama oggola");
        return;
    }

    alert("Fariintaada waa la diray ✅");
    form.reset();
});


    form.reset();
});
