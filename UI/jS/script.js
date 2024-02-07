console.log('hi')

const toggleMenu = document.querySelector('.popup-menu div i')
const popupMenu = document.querySelector('.popup-menu .menu')

toggleMenu.addEventListener('click', () => {
    if (toggleMenu.classList.contains("bx-slider")) {
        toggleMenu.classList.replace("bx-slider", "bx-x")
        popupMenu.style.display = 'flex'
    }else {
        toggleMenu.classList.replace("bx-x", "bx-slider")
        popupMenu.style.display = ''
    }   
})
