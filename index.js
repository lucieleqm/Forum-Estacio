// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');



menuItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classLis.add('active');

    })
})



// teste comite viu ai ana??