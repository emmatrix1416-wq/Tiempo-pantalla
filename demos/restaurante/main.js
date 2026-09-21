(function(){
  /* Maíz y Brasa — demo Mexa_WEB.
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

  /* Reserva: es una demostración, no manda nada a ningún lado */
  safe('form', function(){
    var form = document.getElementById('form');
    var aviso = document.getElementById('formAviso');
    if (!form || !aviso) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var nombre = form.nombre.value.trim();
      if (!nombre){
        aviso.textContent = 'Escribe tu nombre para apartar la mesa.';
        aviso.className = 'form-aviso error';
        form.nombre.focus();
        return;
      }
      aviso.className = 'form-aviso';
      aviso.textContent = 'Listo, ' + nombre + '. En un sitio real esto llegaría al restaurante; aquí es solo una muestra.';
      form.reset();
    });
  });
})();
