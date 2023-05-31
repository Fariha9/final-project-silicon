$(document).ready(function(){


  $('.logoslider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
     
    ]
  });

  $('.quote_slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow:1,
    arrows: true,
    prevArrow:`.arrows .leftarrow`,
    nextArrow: `.arrows .rightarrow`,
    dots: true,
  });


});





let toggle = document.querySelector(`nav #circle`);
let body = document.querySelector(`body`, `h1`);
let button = document.querySelector(`nav #signin`, `#pricing .price_card`, `#work a`);
let quote = document.querySelector(`main #quotes`);
let toolBar = document.querySelector(`#tool .tooldescribe`);
let contact = document.querySelector( `footer .email h6`)
let email  = document.querySelector( `footer .email a`)
const EndingText = document.querySelectorAll(`a`);
const Paragraph = document.querySelectorAll(`p`)
const ToolBtn = document.querySelectorAll(`.toolbtn a`)
const Quotes = document.querySelectorAll(`.quote_2`)
const QuoteArrows = document.querySelectorAll(`.quote_2 .arrows div`)


 function darkModeToggler(){
    body.classList.toggle(`bck-color-black`)
    button.classList.toggle(`btn-color`)
    quote.classList.toggle(`btn-color`)
    toolBar.classList.toggle(`btn-color`)
    contact.classList.toggle(`color-white`)
    email.classList.toggle(`color`)
   
    


    if (!toggle) {

      circle.css("margin-left", "1px");
      toggle = true;

  } else {

      circle.css("margin-left", "28px");
      toggle = false;

  }

  EndingText.forEach((element) => {
    element.classList.toggle('color-white');
  });

  Paragraph.forEach((element) => {
    element.classList.toggle(`color-white`);
  });
  ToolBtn.forEach((element) => {
    element.classList.toggle(`btn-color`);
  });
  Quotes.forEach((element) => {
    element.classList.toggle(`quote_btn`);
  });

  QuoteArrows.forEach((element) => {
    element.classList.toggle(`arrow_btn`);
  });

     }
        toggle.addEventListener(`click`, darkModeToggler);

        AOS.init();
       
       

