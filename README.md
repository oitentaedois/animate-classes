# animate-classes

Animate element classes with timed out state classes.
This module is inspired by the likes of ng-animate and react-css-animation-group.

Since it's not binded to any MVC framework, it really is a lot more simple than the ones that inspired it.
It simply animates by manually calling the animation from somewhere in your application.
This API, although simple, is quite flexible when you hook into things like scroll-trigger.

`animateClass(element, animationClass, timeout [, callback]);`

Where the animationName will be set first as `animationClass`
and then will be appended with `animationClass-active` after the passed timeout.

### Curried version

You can save animations for later use with the curried version of the method.

```

  // setup
  const myAnimation = getAnimateClass(element, animationClass, timeout);

  // later
  myAnimation(() => { console.log('first callback!'); });
  myAnimation(() => { console.log('last callback!'); });

```
