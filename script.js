function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}
function scrollToDiv(className) {
    // Select the first element with the specified class
    const element = document.querySelector(className);
    if (element) {
        // Scroll to the selected element
        element.scrollIntoView({ behavior: 'smooth' });
    }
}