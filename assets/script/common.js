window.addEventListener('load', function() {
  console.log('The window has finished loading!');

  const isTouchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);

  const body = document.body
  const wrapper = document.querySelector('.wrapper')
  const splash = document.querySelector('#splash')

  if (isTouchDevice) {
    body.classList.remove('pc');
    if (splash) initSplash()
  } else {
    body.classList.add('pc');
    wrapper?.classList.remove('active');
  }

  window.addEventListener('scroll', function(){
    const floating = document.querySelector('#floatingTop')
    let windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (windowScrollTop > 120) {
      floating.classList.add('active');
    } else {
      floating.classList.remove('active');
    }
  })
  
  document.querySelector('.header-menu').addEventListener('click', function(e) {
    let flag = this.classList.contains('open');

    if (flag) {
      this.classList.remove('open');
      document.body.classList.remove('fixed');
      document.querySelector('.nav').classList.remove('open');
    } else {
      this.classList.add('open');
      document.body.classList.add('fixed');
      document.querySelector('.nav').classList.add('open');
    }
  });
  
  document.querySelector('.dimmed').addEventListener('click', function() {
    document.querySelector('.header-menu').click();
  });

  if (document.querySelector('#floatingMenu')) {
    document.querySelector('#floatingMenu .btn-to-top').addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});

function scrollToAnchor(tg) {
  let pos = document.getElementById(tg).offsetTop;

  window.scrollTo({
    top: pos - 50,
    behavior: 'smooth'
  });
}

function initSplash() {
  let video = document.createElement('video');
  video.src = './assets/video/intro2.mp4';
  video.muted = true;
  video.autoplay = true;
  video.defaultMuted = true;
  video.playsInline = true;
  
  setTimeout(() => {
    let splash = document.querySelector('#splash')
    let wrapper = document.querySelector('#wrapper')
    splash.textContent = ""
    splash.classList.remove('active')
    wrapper.classList.add('active')
  }, 2500)

  document.querySelector('#splash').appendChild(video);
  document.querySelector('#splash').classList.add('active')
}