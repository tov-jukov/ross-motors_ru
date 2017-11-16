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
});



  // As a plugin
  Vue.use(VueMask.VueMaskPlugin);
  // As a directive
  Vue.directive('mask', VueMask.VueMaskDirective);
  Vue.component('v-dialog', {
    template: '#dialog-template',
    data: function() {
      return {
        active: false,
      }
    },
    methods: {
      open: function() {
        this.active = true
      },
      close: function() {
        this.active = false
      },
      onCancel: function() {
        this.close();
      },
      onConfirm: function() {
        this.close();
      }
    }
  })
  new Vue({
    el: "#app-form4",
    data: {
      form:{
        IName:"",
        IPhone:"",
        IVINcode:"",
        IMessage: "",
        chekedBS: false
      }
    },
    methods: {
      onClick:function(){
        this.$http.post('/api', data|json, {   emulateJSON: true,emulateHTTP:true }).then(function(response) {
           console.log('saved', response);
          },function(response) {
            console.log('error', response);
          }); 
      }
    }
  });