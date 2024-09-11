// select the menu & icon
const menu = document.querySelector('#menu');
const toggleMenuIcon = document.querySelector('#toggle-menu i');

// Show/Hide menu
document.querySelector('#toggle-menu').addEventListener("click", () => {
    menu.classList.toggle('hidden');
    toggleMenuIcon.classList.toggle('fa-xmark');
});

// Select the button and the dropdown menu
const dropdownButton = document.getElementById('LoginDropdown');
const dropdownMenu = document.getElementById('login');

// Function to show the dropdown
function showDropdown() {
    dropdownMenu.classList.remove('hidden'); // Show the dropdown
}

// Function to hide the dropdown
function hideDropdown() {
    dropdownMenu.classList.add('hidden'); // Hide the dropdown
}

// Event listeners for hover functionality
dropdownButton.addEventListener('mouseenter', showDropdown); // Show on hover
dropdownButton.addEventListener('mouseleave', hideDropdown); // Hide when mouse leaves the button
dropdownMenu.addEventListener('mouseenter', showDropdown); // Keep showing if hovering over the menu
dropdownMenu.addEventListener('mouseleave', hideDropdown); // Hide when mouse leaves the menu

// Select all sections and navigation list items
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav li');

// Change the navigation active link color on scroll
window.onscroll = () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("bg-gray-700");
        li.classList.remove("text-white");

        if (li.classList.contains(current)) {
            li.classList.add("bg-gray-700");
            li.classList.add("text-white");
        }
    });
};