(function () {
  'use strict';

  /**
   * AnimateClasses
   *
   * Animate element classes with timed out state classes.
   * This module is inspired by the likes of ng-animate and react-css-animation-group.
   *
   * Since it's not binded to any MVC framework, it really is a lot more simple than the ones that inspired it.
   * It simply animates by manually calling the animation from somewhere in your application.
   * This API, although simple, is quite flexible when you hook into things like scroll-trigger.
   *
   * `animateClass(element, animationClass, timeout [, replaceAfter]);`
   *
   * Where the animationName will be set first as `animationClass`
   * and then will be appended with `animationClass-active` after the passed timeout.
   *
   * The `replaceAfter` argument may be used to replace the elements className after the animation is done.
   * If passed as `['oldClass', 'newClass']`, only the provided `oldClass` will be replaced.
   * Otherwise the whole className will be set to newClass.
   * 
   */

  function animateClasses(el, animationClass, timeout, replaceAfter) {
    if (!el || !animationClass || isNaN(timeout)) { return false; }

    var activeClass = animationClass + '-active';

    // Imediatelly set the animationClass.
    el.classList.add(animationClass);

    // Set the active class on the next event loop.
    setTimeout(function () { el.classList.add(activeClass); });

    // After timeout, remove animation classes and optionally replace class.
    setTimeout(function () {
      if (replaceAfter) {
        if (typeof replaceAfter === 'array') {
          el.classList.remove(replaceAfter[0], animationClass, activeClass);
          el.classList.add(replaceAfter[1]);
        } else {
          el.className = replaceAfter;
        }
      } else {
        el.classList.remove(animationClass, activeClass);
      }
    }, timeout)
  };

  /**
   * API
   */
  
  window.animateClasses = animateClasses;

})();
