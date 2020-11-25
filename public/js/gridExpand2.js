const gridExpandButton2 = document.querySelector('section.grid-section2 .grid .expand button')
const gridSection2 = document.querySelector('section.grid-section2')

let gridIsExpanded2 = false
gridExpandButton2.addEventListener('click', (e) => {
    console.log(`this is section 2 click e: ${e}`)
    gridIsExpanded2 = gridIsExpanded2 ? false : true
    gridSection2.classList.toggle('double-height')
    if (gridIsExpanded2) {
        console.log(document.querySelectorAll('showOnLoad2'))
        document.querySelectorAll('.showOnLoad2').forEach((element) => {
            console.log(element)
            element.classList.remove('opacity0')
        })
        document.querySelector('section.grid-section2 .grid .expand button p').innerText = "Less"
        window.scrollTo({
            top: document.querySelector('section.grid-section2').offsetTop + window.innerHeight,
            behavior: 'smooth'
        })
        document.querySelector('section.grid-section2 .grid .expand button img').classList.add('scroll-arrow-bottom')
    } else {
        document.querySelector('section.grid-section2 .grid .expand button p').innerText = "More"
        window.scrollTo({
            top: document.querySelector('section.grid-section2').offsetTop,
            behavior: 'smooth'
        })
        document.querySelector('section.grid-section2 .grid .expand button img').classList.remove('scroll-arrow-bottom')
    }
})

console.log(document.querySelector('section.grid-section2').offsetTop)