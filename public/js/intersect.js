observerCallback = (entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            //Add section animation
            entry.target.classList.add('sectionActive')
        }
    })
        // document.querySelector('.s3').classList.add('active')
    }

observer = new IntersectionObserver(observerCallback)
document.querySelectorAll('section').forEach(section => {
    observer.observe(section)
})