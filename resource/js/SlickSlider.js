(async ()=>   // async IIFE code for slider.
  {
  const
    interval       = 1500  // ms
  , paddingRight   = 20
  , slidesWrapper  = document.querySelector('.slides')
  , slides         = document.querySelectorAll('.slide')
  // bar xanh = width 25%
  ,bar= document.querySelector("#bar")
  , barWidth = bar.clientWidth
  , delay          = ms => new Promise(r => setTimeout(r, ms))
  , movLeft = (el, mov,ba,width) => new Promise(r =>
    {
    el.ontransitionend =_=>
      {
      el.ontransitionend = null
      el.style.transition = 'none';
      r()
      }
    el.style.transition = '1s';
    el.style.transform  = `translateX(${-mov}px)`;
    //cong width cho bar
    ba.style.transition = '1s'; 
    ba.style.width =`${width*index}px`;
    });

  let index = 0;

  while (true) // infinite carrousel loop
    {
    await delay( interval )
    await movLeft( slidesWrapper, slides[index].clientWidth + paddingRight,bar,barWidth)

    slidesWrapper.appendChild( slides[index] )  // mov first slide to the end
    slidesWrapper.style.transform    = `translateX(0)` // rest translateX
    index = ++index % slides.length
    }
  })()