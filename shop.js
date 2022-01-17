const buttons = document.querySelectorAll('.atoc-btn');
// function atoc() {
//     const button = document.querySelectorAll('.atoc-btn')
//     button.addEventListener('click', e => {
//         alert("clicked element ");
//     });
// }
// atoc();
buttons.forEach(button => {
    button.addEventListener('click', e => {
        alert("Item is added to your cart!! ");
        document.querySelectorAll("addToCart").innerText = "Added to cart"
    });
})