/* Abre e fecha o menu */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('.toggle')

for(const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

/* Fecha o menu quando clicar em qualquer link */
const links = document.querySelectorAll('nav ul li a')
for(const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}


/* Mudar o header da página quer der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {

  if(window.scrollY >= navHeight) {
    // scroll é meior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonial carousel slider swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

    /* ScrollReveal: Mostrar elementos quando der scroll na página */

    const scrollReaveal = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 700,
      reset: true
    })

    scrollReaveal.reveal(
      `#home .image, #home .text,
      #about .image, #about .text,
      #services header, #services .card
      #testimonials header, #testimonials .testimonials
      #contact .text, #contact .links
      footer .brand, footer .social
      `, 
      { interval: 100 }
      )


/* Botão voltar para o top */

const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  
  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
// Menu ativo conforme a seção visível na página
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  /*
  console.log('window page ' + window.pageYOffset)
  console.log('window inner ' + window.innerHeight)
  */

  for(const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight
    /*
    console.log('checkpoint ' + checkpoint)
    console.log(sectionTop)
    console.log(sectionHeight)
    console.log(sectionId)
    console.log(checkpointStart)
    console.log(checkpointEnd)
    //console.log()

    console.log('---------')
    */

    if(checkpointStart && checkpointEnd) {
      document.querySelector(`nav ul li a[href*=${sectionId}]`).classList.add('active')
    } else {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.remove('active')

    }
  }
}




/* When scroll */
window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})


