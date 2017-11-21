"use strict";
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

//---????????----------------------------------------


//import { validationMixin } from 'vuelidate'
//const { required,email,minLength } = window.validators;
//---?????????-------------------------------------
  // As a plugin
  Vue.use(VueMask.VueMaskPlugin);
  // As a directive
  Vue.directive('mask', VueMask.VueMaskDirective);
//----------------------------------------------------------

//??????????? ??????????
  Vue.component('v-dialog', {
    template: '#dialog-template',
    data: function() {
      return {
        active: false,
      }
    },
    props: ['button_text','button_style'],
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
// ??? - ??????????? ??????????


//----------------------------------------------------------
//??????????? ??????????
  Vue.component('v-dialog-a', {
    template: '#dialog-template-a',
    data: function() {
      return {
        active: false,
      }
    },
    props: ['name_form'],
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
// ??? - ??????????? ??????????
// ?-?? ??? ?????????? ? - ???1
new Vue({
            el: "#app-form1",
            data:{
                Marks: {
                    "Hyundai": ["Solaris", "Accent"],                   
                    "Kia": ["RIO II", "RIO III", "Rio X-Line", "PicantoKIA "]                   
                },
                mileages:[
                        "15",   
                         "30",
                         "45",
                         "60",
                         "75",
                         "90",
                         "105",
                         "120",
                         "135",
                         "150",
                         "165",
                         "180",
                         "195",
                         "210",
                         "225",
                         "240"
                    ],
                selectedMark: "",
                selectedModel: "",
                selectedMileage: "",
                aMarks: [],
                aModel: []
                
            },
            methods:{
                onClick:function(){
                    
                    /*var dJSON = {selectedMark:this.selectedMark,selectedModel:this.selectedModel,selectedMileage:this.selectedMileage};
                    console.log('js', dJSON|json);//{   emulateJSON: true,emulateHTTP:true }
                    this.$http.post('/api', dJSON|json).then(function(response) {
                         console.log('saved', response);
                        },function(response) {
                          console.log('error', response);
                        });
                    */
                    this.selectedMileage = this.selectedModel = this.selectedMark = ""; 
                }
            },
            watch: {
                selectedMark: function() {
                    // Clear previously selected values
                    this.aMarks = [];
                    this.aModel = [];
                    this.selectedModel = "";
                    this.selectedMileage = "";
                    // Populate list of marks in the second dropdown
                    if (this.selectedMark.length > 0) {
                        this.aMarks = this.Marks[this.selectedMark];
                    }
                    else{
                        this.aMarks = [];
                        this.aModel = [];
                        this.selectedModel = "";
                        this.selectedMileage = "";
                    }
                },
                selectedModel: function() {
                    // Clear previously selected values
                    this.aModel = [];
                    this.selectedMileage = "";
                    // Now we have a continent and country. Populate list of model in the third dropdown
                    if (this.selectedModel.length > 0) {
                        this.aModel = this.mileages;
                    }
                    else{
                        this.aModel = [];
                        this.selectedMileage = "";
                    }
                }
            }
        });
//Форма записи

new Vue({
            el: "#app-callback1",
        data:{
            form:{
                IName:"",
                IPhone:"",
                IMail:"",
                chekedBS: false
            }
        },
        methods:{
            onClick:function(){
                console.log('saved',data.form|json);
                this.$http.post('/api', data.form|json, {   emulateJSON: true,emulateHTTP:true }).then(function(response) {
                     console.log('saved', response);
                    },function(response) {
                      console.log('error', response);
                    }); 
            }
        },
        
        validations: {
            form:{
            IPhone:{
                d:''
                },
            IMail:{
                email:''
                }
            }
        }
            
        });
        
new Vue({
            el: "#app-form2",
            data:{
                form:{
                    IName:"",
                    IPhone:"",
                    IMessage: "",
                    chekedBS: false,
                    disabled: true,
                }
            },
            methods:{
                onClick:function(){
                    this.$http.post('/api', data.form|json, {   emulateJSON: true,emulateHTTP:true }).then(function(response) {
                         console.log('saved', response);
                        },function(response) {
                          console.log('error', response);
                        }); 
                }
            }
        });
        
        //---------------------------------------------------------
// ОНЛАЙН РАСЧЕТ СТОИМОСТИ ЗАПЧАСТЕЙ И НАЛИЧИЕ НА СКЛАДЕ - форма 4
  new Vue({
    el: "#app-callback2",
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
  new Vue({
            el: "#app-form4",
            data:{
                form:{
                    IName:"",
                    IPhone:"",
                    IVINcode:"",
                    IMessage: "",
                    chekedBS: false
                }
            },
            methods:{
                onClick:function(){
                    this.$http.post('/api', data|json, {   emulateJSON: true,emulateHTTP:true }).then(function(response) {
                         console.log('saved', response);
                        },function(response) {
                          console.log('error', response);
                        }); 
                }
            }
            
        });


new Vue({
            el: "#app-form3",
        data:{
            form:{
                IName:"",
                IPhone:"",
                IMail:"",
                IMessage:"",
                chekedBS: false
            }
        },
        methods:{
              submitForm: function(e) {
                e.preventDefault();

                var formData = new FormData();
                var files = this.$refs.fileInputs.files;
                console.log(this.$refs);
                console.log(files);
                formData.append('IName', this.form.IName);
                formData.append('IPhone', this.form.IPhone);
                formData.append('IMail', this.form.IMail);
                formData.append('IMessage', this.form.IMessage);
                formData.append('chekedBS', this.form.chekedBS);
                for(var key in files){
                    console.log(key);
                    formData.append('more_image_['+key+']', files[key]);
                }
                 this.$http.post('/my/post/url', form, function (data, status, request) {
                     console.log('success');
                 }).error(function (data, status, request) {
                     console.log('error');
                 });
                }
        }
            
        });
