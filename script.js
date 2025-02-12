let humburger = document.querySelector('.hamburger-menu');
let sidebar = document.querySelector('.sidebar');
let sidebarLink = document.querySelectorAll('.sidebar-link')


humburger.addEventListener('click', function(){
    
    sidebar.classList.toggle('show');
    // sidebar.style.display = "none"
    // sidebar.style.display = "block"
})

