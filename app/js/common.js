new Vue({
  el: '#vueapp',
  data: {
    slides: [
    {
      url: 'img/licence/license-01.jpg'
    },

    {
      url: 'img/licence/license-02.jpg'
    },

    {
      url: 'img/licence/license-03.jpg'
    },

    {
      url: 'img/licence/license-04.jpg'
    }
    ]
  },
components: {
    'carousel-3d': Carousel3d.Carousel3d,
    'slide': Carousel3d.Slide
  }
})
