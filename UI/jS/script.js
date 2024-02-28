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
const clearcacheSpan = document.querySelector('.cache-div span')
const clearcacheParagraph = document.querySelector('.cache-div p')

clearCacheTrigger.addEventListener("click", () => {
    clearCacheDiv.style.display = "flex";
    clearcacheSpan.innerText = "Clear Cache?"
    clearcacheParagraph.innerText = "Clearing the data cache may fix some problems with the game."
    clearCacheButtons[0].style.display = "block"
    clearCacheButtons[1].style.display = "block"
    clearCacheButtons[2].style.display = "none"
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
    
    clearcacheSpan.innerText = "Cache Cleared"
    clearcacheParagraph.innerText = "The process completed successfully"
    clearCacheButtons[0].style.display = "none"
    clearCacheButtons[1].style.display = "none"
    clearCacheButtons[2].style.display = "block"

    clearCacheButtons[2].addEventListener("click", () => {
        clearCacheDiv.style.display = "none";
    })
})

const shuffleCarousel = setInterval(
    () => {
        const carousel = document.querySelector('.carousel div')
        const carouselImages = document.querySelector('.carousel div').getElementsByTagName('img');
        let srcArray = [
                        "assets/banners/banner1.png",
                        "assets/banners/banner2.png",
                        "assets/banners/banner3.png",
                        "assets/banners/banner4.png"
                                                   ]

    function arrayShuffle() {
        for (let i = srcArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [srcArray[i], srcArray[j]] = [srcArray[j], srcArray[i]];
        }
    }

    arrayShuffle()

    for(i = 0; i < carouselImages.length; i++){
        for(i = 0; i < srcArray.length; i++){
            carouselImages[i].src = srcArray[i];
        }
    }
},4000)


