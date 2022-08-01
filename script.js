//Make Navbar fixed to top of screen after scrolling past header
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 253) {
        document.getElementById('site-navigation').classList.add('nav-fixed');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('site-navigation').classList.remove('nav-fixed');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 
// DOMContentLoaded  end