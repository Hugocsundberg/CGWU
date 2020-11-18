const gridExpandButton = document.querySelector('section.grid-section .grid .expand button')
const gridSection = document.querySelector('section.grid-section')

let gridIsExpanded = false
gridExpandButton.addEventListener('click', ()=>{
    gridIsExpanded = gridIsExpanded ? false : true
    gridSection.classList.toggle('double-height')
    if(gridIsExpanded) {
        document.querySelector('section.grid-section .grid .expand button p').innerText="Less"
        window.scrollTo({
            top: document.querySelector('section.grid-section').offsetTop + window.innerHeight,
            behavior: 'smooth'
        })
        document.querySelector('section.grid-section .grid .expand button img').classList.add('scroll-arrow-bottom')
    } else {
        document.querySelector('section.grid-section .grid .expand button p').innerText="More"
        window.scrollTo({
            top: document.querySelector('section.grid-section').offsetTop,
            behavior: 'smooth'
        })
        document.querySelector('section.grid-section .grid .expand button img').classList.remove('scroll-arrow-bottom')
    }
}) 

console.log(document.querySelector('section.grid-section').offsetTop)