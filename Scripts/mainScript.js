const navbar = document.querySelector(".navbar");
const scrollwatch = document.createElement('span')

scrollwatch.setAttribute('data-scroll-watcher', '');

navbar.before(scrollwatch);

const navObserver = new IntersectionObserver((entries) =>
{
    navbar.classList.toggle('sticking', !entries[0].isIntersecting);
});

navObserver.observe(scrollwatch);  

var projectCards = document.querySelectorAll(".project-card");
projectCards.forEach(card => {
    card.addEventListener('click', function(){ 
        projectCards.forEach(c=> {  
            c.classList.remove('expand-card');
        });
        this.classList.add('expand-card');
    })
});