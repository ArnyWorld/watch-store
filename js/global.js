    document.addEventListener("DOMContentLoaded", function () {
        let menu = document.querySelector('.navigation__menu');
        let navBar = document.querySelector('.navigation__group');
        let nav = document.querySelector('.navigation');
        let accordionContainer = document.querySelectorAll('.accordion__question');
        let accordionLink = document.querySelectorAll('.accordion__link');
        console.log(accordionLink)
        let copyText = document.querySelector('.footer__copy');
        let goTop = document.querySelector(".goTop");
        let year = new Date();
        let navigation__link = document.querySelectorAll('.navigation__link');

        menu.addEventListener("click", showNavBar)
        navigation__link.forEach(link=>{
            link.addEventListener("click", linkNavigation)
        })
        // searchAccordion();

        // function searchAccordion(){
        //     accordionLink.forEach((element, i)=>{
        //         element.addEventListener("click",showAccordion)
        //     })
        // }
        // function showAccordion(e){
        //     console.log(e.target.parentElement);
        //     accordionContainer.forEach( ( element , i )=>{
        //         // Quitamos la clase activo de TODOS los bloques
        //         element.classList.remove('accordion__question--active')
        //     })
        //     // Añadiendo la clase activo al bloque cuya posición sea igual al del h2
        //     // (Línea número 12)
        //     e.target.parentElement.classList.add('accordion__question--active')   
        // }

        function showNavBar(){
            navBar.classList.toggle("navigation__group--active")
            nav.classList.toggle("navigation--active")

        }

        accordionLink.forEach((accordionTitle) => {
            accordionTitle.addEventListener("click", () => {
                if (accordionTitle.classList.contains("is-open")) {
                    accordionTitle.classList.remove("is-open");
                } else {
                    const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
                    accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
                        accordionTitleWithIsOpen.classList.remove("is-open");
                    });
                    accordionTitle.classList.add("is-open");
                }
            });
        });
        
        function topFunction(){
            window.scrollTo({
                top:0,
                behavior:'smooth'
            })
        }
        function linkNavigation(){
            if(navBar.classList.contains("navigation__group--active") || nav.classList.contains("navigation--active")){    
                navBar.classList.remove("navigation__group--active")
                nav.classList.remove("navigation--active")
            }
        }

        goTop.addEventListener("click",topFunction);
        window.addEventListener('scroll',()=>{
            const scrollPX = window.scrollY;
            //console.log(scrollPX);
            if(scrollPX > 200){
                goTop.style.display="flex";      
            }else{
                goTop.style.display="none";
            }
        });


        let splide = new Splide("#products-carousel", {
        type: "loop",
        autoHeight: true,
        focus: "center",
        autoWidth: true,
        });

        splide.mount();

        let splide2 = new Splide("#testimonials-carousel", {
            type: "loop",
            autoHeight: true,
            focus: "center",
            autoWidth: true,
            });
    
            splide2.mount();
    
            copyText.innerText = `Copyright ${year.getFullYear()}. All rights reserved by ArniCode`;
    });