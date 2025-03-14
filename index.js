const menuIcon = document.querySelector('.menu-icon'); 
const sidebarMenu = document.querySelector('.sidebar-menu'); 
const sidebarOverlay = document.querySelector('.sidebar-overlay'); 


function openSidebar() {
    sidebarMenu.classList.add('show'); 
    sidebarOverlay.classList.add('active'); 
}

// for closing 
function closeSidebar() {
    sidebarMenu.classList.remove('show');
    sidebarOverlay.classList.remove('active'); 
}

menuIcon.addEventListener('click', openSidebar);

sidebarOverlay.addEventListener('click', closeSidebar);

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    alert('Thank you! Your form has been submitted.');
});

const form2 = document.querySelector('form');
form.addEventListener('submit', (event) => {
    const delivery = document.querySelectorAll('input[name="delivery"]:checked');
    if (delivery.length === 0) {
        alert("Please select a delivery option.");
        event.preventDefault();
    }
});

const toggleAccessibilityMode = document.getElementById('accessibility-mode-toggle');

// Apply mode if saved in localStorage
if (localStorage.getItem('accessibilityMode') === 'enabled') {
    document.body.classList.add('accessibility-mode');
}

toggleAccessibilityMode.addEventListener('click', () => {
    document.body.classList.toggle('accessibility-mode');
    // Save mode in localStorage
    if (document.body.classList.contains('accessibility-mode')) {
        localStorage.setItem('accessibilityMode', 'enabled');
    } else {
        localStorage.removeItem('accessibilityMode');
    }
});
