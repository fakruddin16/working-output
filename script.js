document.querySelector(".search-btn").addEventListener("click", () => {
    alert("Searching packages...");
});
const passengerSelect = document.getElementById("passengers");
const lunch = document.getElementById("lunch");
const dinner = document.getElementById("dinner");
const searchBtn = document.querySelector(".search-btn");

const ADULT_PRICE = 15000;
const CHILD_PRICE = 12000;
const LUNCH_PRICE = 500;
const DINNER_PRICE = 700;
const GST_RATE = 0.05;

searchBtn.addEventListener("click", calculatePrice);

function calculatePrice() {

    const [adults, children] = passengerSelect.value.split("-").map(Number);

    let adultTotal = adults * ADULT_PRICE;
    let childTotal = children * CHILD_PRICE;

    let mealTotal = 0;
    if (lunch.checked) mealTotal += LUNCH_PRICE;
    if (dinner.checked) mealTotal += DINNER_PRICE;

    let subtotal = adultTotal + childTotal + mealTotal;
    let gst = subtotal * GST_RATE;
    let total = subtotal + gst;

    document.getElementById("adultPrice").innerText =
        `₹${ADULT_PRICE} x ${adults} Adults = ₹${adultTotal}`;

    document.getElementById("childPrice").innerText =
        `₹${CHILD_PRICE} x ${children} Child = ₹${childTotal}`;

    document.getElementById("mealPrice").innerText =
        `Meals = ₹${mealTotal}`;

    document.getElementById("subtotal").innerText =
        `Subtotal = ₹${subtotal}`;

    document.getElementById("gst").innerText =
        `GST (5%) = ₹${gst}`;

    document.getElementById("total").innerText =
        `₹${total}`;
}