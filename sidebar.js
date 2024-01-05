const closeBtn = document.querySelector('.sidebar-header__close-btn');
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');



toggleBtn.addEventListener('click', function() {
    //La forma larga:
    /* if(sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar');
    } else {
        sidebar.classList.add('show-sidebar');
    } */

    //otra forma mas corta:
    sidebar.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar')
})







