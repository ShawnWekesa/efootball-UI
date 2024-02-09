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


const clearCacheTrigger = document.querySelector('.clear-cache > span')
const clearCacheDiv = document.querySelector('.cache-div');
const clearCacheButtons = document.querySelectorAll('.cache-div div button')

clearCacheTrigger.addEventListener("click", () => {
    clearCacheDiv.style.display = "flex";
})

clearCacheButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault()
    })
})
clearCacheButtons[0].addEventListener("click", () => {
    clearCacheDiv.style.display = "none";
})
clearCacheButtons[1].addEventListener("click", () => {
    const clearcacheSpan = document.querySelector('.cache-div span')
    const clearcacheParagraph = document.querySelector('.cache-div p')

    clearcacheSpan.innerText = "Cache Cleared"
    clearcacheParagraph.innerText = "The process completed successfully"
    clearCacheButtons[0].style.display = "none"
    clearCacheButtons[1].style.display = "none"
    clearCacheButtons[2].style.display = "block"

    clearCacheButtons[2].addEventListener("click", () => {
    clearCacheDiv.style.display = "none";
})
    console.log(clearcacheParagraph, clearcacheSpan)
})
