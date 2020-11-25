//Observer for adding animation class
observerCallback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('sectionActive')
            try {
                for (i = 0; i < entry.target.children.length; i++) {
                    console.log(entry.target.children[i])
                    if (entry.target.children[i].classList.contains('content-box-container')) {
                        console.log(`this one contains the thing: ${entry.target.children[i]}`)
                        entry.target.children[i].children[0].classList.add('delayFadeIn')
                    }
                }

                entry.target.children
            } catch (error) {
                console.log(error)
            }
        }
    })
}

observer = new IntersectionObserver(observerCallback, { threshold: 0.00001 })
document.querySelectorAll('section').forEach(section => {
    observer.observe(section)
})

//Observer for scroll-points
let isAtBottom = false
let nextSection
scrollArrowObserverCallback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            //Sets next scroll point
            nextSection = entry.target.nextElementSibling
            //Sets 'isAtBottom to true or false'
            if (entry.target.nextElementSibling.tagName !== 'SECTION') {
                scrollArrow.classList.add('scroll-arrow-bottom')
                isAtBottom = true
            } else {
                scrollArrow.classList.remove('scroll-arrow-bottom')
                isAtBottom = false
            }
        }
    })
}

scrollArrowObserver = new IntersectionObserver(scrollArrowObserverCallback, { threshold: 0.9 })
document.querySelectorAll('section').forEach(section => {
    scrollArrowObserver.observe(section)
})

scrollArrow = document.querySelector('.scroll-arrow')

//Scrolls to next sctoll point or to top depending on 'isAtBottom' 
scrollArrow.addEventListener('click', () => {
    if (isAtBottom) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    window.scrollTo({
        top: nextSection.offsetTop,
        behavior: 'smooth'
    })
})