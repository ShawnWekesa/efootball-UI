   const home = document.getElementById('home')
        const homePage = document.querySelector('.home')
        const shop = document.getElementById('shop')
        const shopPage = document.querySelector('.shop')
        const extras = document.getElementById('extras')
        const extrasPage = document.querySelector('.extras')
            
            home.addEventListener('click', () => {
                home.classList.add('active')
                homePage.classList.remove('display-none')
                shop.classList.remove('active')
                shopPage.classList.add('display-none')
                extras.classList.remove('active')
                extrasPage.classList.add('display-none')
            })

            shop.addEventListener('click', () => {
                shop.classList.add('active')
                shopPage.classList.remove('display-none')
                home.classList.remove('active')
                homePage.classList.add('display-none')
                extras.classList.remove('active')
                extrasPage.classList.add('display-none')
            })

            extras.addEventListener('click', () => {
                extras.classList.add('active')
                extrasPage.classList.remove('display-none')
                home.classList.remove('active')
                homePage.classList.add('display-none')
                shop.classList.remove('active')
                shopPage.classList.add('display-none')
            })