console.log('hi')

const toggleMenu = document.querySelector('.popup-menu div i')
const popupMenu = document.querySelector('.popup-menu .menu')

toggleMenu.addEventListener('click', () => {
    if (toggleMenu.classList.contains("bx-x")) {
        toggleMenu.classList.replace("bx-x", "bx-slider")
        popupMenu.style.display = 'none'
    }else {
        toggleMenu.classList.replace("bx-slider", "bx-x")
        popupMenu.style.display = ''
    }   
})
