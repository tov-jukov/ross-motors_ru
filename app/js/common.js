"use strict";

//слайдер
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
//end слайдер

//---????????----------------------------------------
init_form_data = {
    project_name: 'Росс-Моторс',
    admin_email: ''
}

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
Vue.component('v-dialog-menu-a', {
    template: '#dialog-template-menu-a',
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
/*Vue.component("calculation-to", {
  template:"#calculation-to-template",
  data:function(){
      return {
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
            aModel: [],
            form_subject: "Форма 'Он-лайн расчет стоимости планового ТО'",
            project_name: init_form_data.project_name
        }
  },
    methods:{
      onClick:function(){
        var formData = new FormData();
        formData.append('selectedMark', this.selectedMark);
        formData.append('selectedModel', this.selectedModel);
        formData.append('selectedMileage', this.selectedMileage);
        formData.append('form_subject', this.form_subject);
        formData.append('project_name', this.project_name);
        conslole.log(formData);
        var json_data = JSON.parse(JSON.stringify(formData));
        //json_data.project_name=init_form_data.project_name;
        console.log(json_data);
        axios.post('http://тов-жюков.рф/work/ross-motors/mail.php',json_data)
        .then(function(response){console.log('success');console.log(response);})
        .catch(function(e){console.log(e)});
         this.selectedMileage = this.selectedModel = this.selectedMark = "";
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
  }

});
new Vue({el:"#form-calculation-to"});*/
new Vue({
            el: "#form-calculation-to",
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
                    var formData = new FormData();
                    formData.append('selectedMark', this.selectedMark);
                    formData.append('selectedModel', this.selectedModel);
                    formData.append('selectedMileage', this.selectedMileage);
                    formData.append('form_subject', this.form_subject);
                    formData.append('project_name', this.project_name);
                    conslole.log(formData);
                    var json_data = JSON.parse(JSON.stringify(formData));
                    json_data.project_name=init_form_data.project_name;
                    console.log(json_data);
                    axios.post('http://тов-жюков.рф/work/ross-motors/mail.php',json_data)
                    .then(function(response){console.log('success');console.log(response);})
                    .catch(function(e){console.log(e)});
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

//Форма обратного звонка callback
//project_name - название проекта
//admin_email - адрес приёма корреспонденции
//form_subject - форма отправитель
Vue.component("callback", {
  template:"#callback-template",
  data:function(){
      return {
        form:{
          IName:"",
          IPhone:"",
          IMail:"",
          form_subject: "Форма заказать звонок",
          chekedBS: false
          }
        }
  },
    methods:{
      onClick:function(){
        
        var json_data = JSON.parse(JSON.stringify(this.form));
        json_data.project_name=init_form_data.project_name;
        console.log(json_data);
        axios.post('http://тов-жюков.рф/work/ross-motors/mail.php',json_data)
        .then(function(response){console.log('success');console.log(response);})
        .catch(function(e){console.log(e)})
      }
  }

});
new Vue({
            el: "#app-callback1",
});
new Vue({
            el: "#app-callback2",
});
new Vue({
            el: "#app-callback3",
});
new Vue({
            el: "#app-callback4",
});
// -- end callback
// -- ОН-ЛАЙН РАСЧЕТ СТОИМОСТИ СЛЕСАРНОГО РЕМОНТА

Vue.component("calculation-locksmith-repair", {
  template:"#calculation-locksmith-repair-template",
  data:function(){
      return {
        form:{
            IName:"",
            IPhone:"",
            IMessage: "",
            disabled: true,
            form_subject: "Форма заказать звонок",
            chekedBS: false
          }
        }
  },
    methods:{
      onClick:function(){
        
        var json_data = JSON.parse(JSON.stringify(this.form));
        json_data.project_name=init_form_data.project_name;
        console.log(json_data);
        axios.post('http://тов-жюков.рф/work/ross-motors/mail.php',json_data)
        .then(function(response){console.log('success');console.log(response);})
        .catch(function(e){console.log(e)})
      }
  }

});
new Vue({
            el: "#form-calculation-locksmith-repair",
        });
        
        //---------------------------------------------------------
// ОНЛАЙН РАСЧЕТ СТОИМОСТИ ЗАПЧАСТЕЙ И НАЛИЧИЕ НА СКЛАДЕ - форма 4
//calculation-zip-warehouse-template
Vue.component("calculation-zip-warehouse", {
  template:"#calculation-zip-warehouse-template",
  data:function(){
      return {
        form:{
            IName:"",
            IPhone:"",
            IVINcode:"",
            IMessage: "",
            form_subject: "Форма заказать звонок",
            chekedBS: false
          }
        }
  },
    methods:{
      onClick:function(){
        
        var json_data = JSON.parse(JSON.stringify(this.form));
        json_data.project_name=init_form_data.project_name;
        console.log(json_data);
        axios.post('http://тов-жюков.рф/work/ross-motors/mail.php',json_data)
        .then(function(response){console.log('success');console.log(response);})
        .catch(function(e){console.log(e)})
      }
  }

});
  new Vue({
            el: "#form-calculation-zip-warehouse",
            
        });

// ОН-ЛАЙН РАСЧЕТ СТОИМОСТИ КУЗОВНОГО РЕМОНТА
Vue.component("calculation-bodywork", {
  template:"#calculation-bodywork-template",
  data:function(){
      return {
            form:{
                IName:"",
                IPhone:"",
                IMail:"",
                IMessage:"",
                form_subject: "Форма заказать звонок",
                chekedBS: false
              }
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
                formData.append('project_name', init_form_data.project_name);
                for(var key in files){
                    console.log(key);
                    formData.append('more_image_['+key+']', files[key]);
                }
                 axios.post('http://тов-жюков.рф/work/ross-motors/mail.php',json_data)
                    .then(function(response){console.log('success');console.log(response);})
                    .catch(function(e){console.log(e)})
                }
            }
});
new Vue({el:"#form-calculation-bodywork"});
/*
new Vue({
            el: "#app-calculation-bodywork",
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
                 this.$http.post('/my/post/url', formData, function (data, status, request) {
                     console.log('success');
                 }).error(function (data, status, request) {
                     console.log('error');
                 });
                }
        }
            
        });
*/