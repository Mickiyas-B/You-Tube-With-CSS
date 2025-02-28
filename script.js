let humburger = document.querySelector('.hamburger-menu');
let sidebar = document.querySelector('.sidebar');




// exsercise
let profile = document.querySelector('.my_profile');
let main = document.querySelector('.main-section')


humburger.addEventListener('click', function(){
    
    sidebar.classList.toggle('show');
    // sidebar.style.display = "none"
    // sidebar.style.display = "block"
})

profile.addEventListener('click', function(){

    main.classList.toggle('show');
})