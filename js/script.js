$(document).ready(function () {
  $('.nav-link').click(function (event) {
    $('.nav-link ').removeClass(' active');
    $(this).addClass(' active');
  });

  $('.navbar-brand').click(function (event) {
    $('.nav-link ').removeClass(' active');
  });
  
  $('#toTop').click(function (event) {
    $('.nav-link ').removeClass(' active');
  });

  $('.leaflet-popup-content-wrapper').css("border-radius", "5px");
  $('.leaflet-popup-tip').hide();

  let card_skill = $('.card.shadow-sm.ta-justify');
  $.each(card_skill, function (index, value) {
    let duration = Number(index) * 50;
    $(value).attr("data-aos-delay", duration);
  });

  $('.nav-item.dropdown').click(function (event) {
    let check = $(this).attr("class");
    if (check == "nav-item dropdown") {
      $(this).addClass(' show');
      $('.dropdown-menu.dropdown-menu-end').addClass(' show');
      $('.nav-link.dropdown-toggle').attr('aria-expanded', true);
    } else {
      $(this).removeClass(' show');
      $('.dropdown-menu.dropdown-menu-end').removeClass(' show');
      $('.nav-link.dropdown-toggle').attr('aria-expanded', false);
    }
  });
});

//Get the button
let mybutton = document.getElementById('toTop');

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$('img').attr("draggable", false);

function windowMatches(x) {
  if (x.matches) {
    $('#college1').show();
    $('#college2').hide();
    $('.div-about').css({
      'padding-left': '8vw',
      'padding-right': '8vw'
    });
  } else {
    $('#college1').hide();
    $('#college2').show();
    $('.div-about').removeAttr('style');
  }
}
let x = window.matchMedia("(max-width: 767px)");
windowMatches(x);
x.addListener(windowMatches);

window.addEventListener('scroll', (e) => {
  let value = window.scrollY;
  $('#parallax').css('transform', `translateY(${value * 0.4}px)`);
  $('#path-1').css('transform', `translateY(${value * 0.1}px)`);
  $('#path-2').css('transform', `translateY(${value * 0.05}px)`);
});