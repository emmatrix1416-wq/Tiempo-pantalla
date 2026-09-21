(function(){
  /* La Surtida — demo Mexa_WEB.
     Todo el contenido está en el HTML; esto solo añade el movimiento. */

  'use strict';

  function safe(nombre, fn){
    try { fn(); } catch(e){ if (window.console) console.warn('[' + nombre + ']', e); }
  }

  /* Borde de la barra al bajar */
  safe('barra', function(){
    var barra = document.getElementById('barra');
    if (!barra) return;
    var alScroll = function(){ barra.classList.toggle('activo', window.scrollY > 10); };
    alScroll();
    window.addEventListener('scroll', alScroll, { passive:true });
  });

  /* Cerrar el menú al elegir un enlace */
  safe('menu', function(){
    var check = document.getElementById('menuToggle');
    var nav = document.querySelector('.nav');
    if (!check || !nav) return;
    nav.addEventListener('click', function(e){
      if (e.target.closest('a')) check.checked = false;
    });
  });

  /* Revelado al entrar en pantalla. Regla de oro: el contenido
     SIEMPRE termina visible, pase lo que pase. */
  safe('revelar', function(){
    var els = document.querySelectorAll('.rev');
    var mostrarTodo = function(){
      for (var i = 0; i < els.length; i++){
        els[i].style.transitionDelay = '0ms';
        els[i].classList.add('visible');
      }
    };
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) { mostrarTodo(); return; }

    var reacciono = false;
    var obs = new IntersectionObserver(function(entradas){
      for (var i = 0; i < entradas.length; i++){
        if (entradas[i].isIntersecting){
          reacciono = true;
          entradas[i].target.classList.add('visible');
          obs.unobserve(entradas[i].target);
        }
      }
    }, { threshold:0.05, rootMargin:'0px 0px -8% 0px' });

    for (var i = 0; i < els.length; i++){
      els[i].style.transitionDelay = (Math.min(i % 3, 2) * 90) + 'ms';
      obs.observe(els[i]);
    }
    setTimeout(function(){ if (!reacciono) mostrarTodo(); }, 3000);
  });


  /* Volver: si llegaron desde la página principal, el historial los deja
     exactamente donde estaban. Si no, el enlace normal hace su trabajo. */
  safe('volver', function(){
    var volver = document.getElementById('volver');
    if (!volver) return;
    volver.addEventListener('click', function(e){
      if (!document.referrer || history.length < 2) return;
      try {
        if (new URL(document.referrer).origin === location.origin){
          e.preventDefault();
          history.back();
        }
      } catch (err) { /* si algo falla, se sigue el enlace */ }
    });
  });
})();
