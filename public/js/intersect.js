//Observer for adding animation class
observerCallback = (entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('sectionActive')
        }
    })
    }

observer = new IntersectionObserver(observerCallback)
document.querySelectorAll('section').forEach(section => {
    observer.observe(section)
})

//Observer for scroll-points
let isAtBottom = false
let nextSection
scrollArrowObserverCallback = (entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log(entry.target)
            //Sets next scroll point
            nextSection = entry.target.nextElementSibling
            //Sets 'isAtBottom to true or false'
            if(entry.target.nextElementSibling.tagName !== 'SECTION') {
                scrollArrow.classList.add('scroll-arrow-bottom')
                isAtBottom = true
            } else {
                scrollArrow.classList.remove('scroll-arrow-bottom')
                isAtBottom = false
            }
        }
    })
    }

scrollArrowObserver = new IntersectionObserver(scrollArrowObserverCallback, {threshold: 0.9})
document.querySelectorAll('section').forEach(section => {
    scrollArrowObserver.observe(section)
})

scrollArrow = document.querySelector('.scroll-arrow')

//Scrolls to next sctoll point or to top depending on 'isAtBottom' 
scrollArrow.addEventListener('click', ()=>{
    if(isAtBottom) {
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