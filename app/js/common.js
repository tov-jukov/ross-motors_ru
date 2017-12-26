"use strict";

//слайдер
new Vue({
  el: '#vueapp',
  data: {
    slides: [
    {
      url: '/img/licence/license-01.jpg'
    },

    {
      url: '/img/licence/license-02.jpg'
    },

    {
      url: '/img/licence/license-03.jpg'
    },

    {
      url: '/img/licence/license-04.jpg'
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
  // Validation

//ad = validators.required;
//console.log(ad);
// Функция уведомления
// options - настройка уведомления поумолчанию
// ссылка на Noty https://ned.im/noty/#/options и https://ned.im/noty/v2/themes.html
options = {
    timeout: 3000,
    theme: 'relax',
    layout: 'topRight'
  };
function NotyF(data, opts) {
  new Noty(Object.assign(options, opts, data)).show();
  };
//
/* Example
https://github.com/monterail/vuelidate/issues/165
Vue.use(window.vuelidate.default)
const { required, minLength } = window.validators

const validate = (data, validations) =>
  new Vue({ data, validations }).$v

// ... somewhere in your backend logic
const validationTree = validate(
  {someData: 'hello'},
  {someData: { minLength: minLength(2) }}
)

console.log(JSON.stringify(validationTree, null, 2))
*/

//Vue.use(window.vuelidate.default);

//----------------------------------------------------------
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
        this.active = false;
      },
      onCancel: function() {
        this.close();
      },
      onConfirm: function() {
        this.close();
      }
    },
    created:function(){
      this.$on('event',function(){this.close();});
    }
  })
//----------------------------------------------------------
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
        this.active = false;
      },
      onCancel: function() {
        this.close();
      },
      onConfirm: function() {
        this.close();
      }
    },
    created:function(){
      this.$on('event',function(){this.close();});
    }
  })
//----------------------------------------------------------
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
        this.active = true;
      },
      close: function(id) {
        this.active = false;
      },
      onCancel: function() {
        this.close();
      },
      onConfirm: function() {
        this.close();
      }
    },
    created:function(){
      this.$on('event',function(){this.close();});
    }
  })
//Форма обратного звонка callback
//project_name - название проекта
//admin_email - адрес приёма корреспонденции
//form_subject - форма отправитель
SimpleVueValidation = SimpleVueValidator;
var Validator = SimpleVueValidation.Validator;
Vue.use(SimpleVueValidation);
//const { required, minLength } = require('libs/vue/validators.js')
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

        parent = this;
          this.$validate()
          .then(function(success){
            if(success == true){
            parent.$parent.$emit('event');
            var json_data = JSON.parse(JSON.stringify(parent.form));
            json_data.project_name=init_form_data.project_name;
            //console.log(json_data);
            axios.post('mail.php',json_data)
            .then(function(response){console.log('success');console.log(response);NotyF({type:'success',text:"Запрос отправлен."});})
            .catch(function(e){console.log(e);NotyF({type:'error',text:"Ошибка."});});
            parent.reset();
            }
        });
      },
      reset:function(){
        //old_form:Object.assign({}, this.form)
        this.form.IName="";
        this.form.IPhone="";
        this.form.IMail="";
        this.form.form_subject= "Форма заказать звонок";
        this.form.chekedBS= false;
        this.validation.reset();
      }
  },
  validators:{
      'form.IPhone':function(value){
        return Validator.value(value).required().regex('[0-9]+');
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
            form_subject: 'Форма "ОН-ЛАЙН РАСЧЕТ СТОИМОСТИ СЛЕСАРНОГО РЕМОНТА"',
            chekedBS: false
          }
        }
  },
    methods:{
      onClick:function(){
        parent = this;
        this.$validate()
        .then(function(success){
          if(success == true){
            parent.$parent.$emit('event');
            var json_data = JSON.parse(JSON.stringify(parent.form));
            json_data.project_name=init_form_data.project_name;
            console.log(json_data);
            axios.post('mail.php',json_data)
            .then(function(response){console.log('success');console.log(response);NotyF({type:'success',text:"Запрос отправлен."});})
            .catch(function(e){console.log(e);NotyF({type:'error',text:"Ошибка."});});
            parent.reset();
            }
        });
      },
      reset:function(){
        this.form.IName = "";
        this.form.IPhone = "";
        this.form.IMessage = "";
        this.form.form_subject = 'Форма "ОН-ЛАЙН РАСЧЕТ СТОИМОСТИ СЛЕСАРНОГО РЕМОНТА"';
        this.form.chekedBS = false;
        this.validation.reset();
      }
    },
    validators:{
      'form.IName':function(value){
      return Validator.value(value).required();
      },
      'form.IPhone':function(value){
        return Validator.value(value).required().regex('[0-9]+');
      },
      'form.IMessage':function(value){
        return Validator.value(value).required();
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
            form_subject: 'Форма "ОНЛАЙН РАСЧЕТ СТОИМОСТИ ЗАПЧАСТЕЙ И НАЛИЧИЕ НА СКЛАДЕ"',
            chekedBS: false
          }
        }
  },
    methods:{
      onClick:function(){
        parent = this;
        this.$validate()
        .then(function(success){
            if(success == true){
              parent.$parent.$emit('event');
              var json_data = JSON.parse(JSON.stringify(parent.form));
              json_data.project_name=init_form_data.project_name;
              axios.post('mail.php',json_data)
              .then(function(response){console.log('success');console.log(response);NotyF({type:'success',text:"Запрос отправлен."});})
              .catch(function(e){console.log(e);NotyF({type:'error',text:"Ошибка."});});
              parent.reset();
          }
        });
  },
  reset:function(){
    this.form.IName = "";
    this.form.IPhone = "";
    this.form.IVINcode = "";
    this.form.IMessage =  "";
    this.form.chekedBS =  false;
    this.form_subject = 'Форма "ОНЛАЙН РАСЧЕТ СТОИМОСТИ ЗАПЧАСТЕЙ И НАЛИЧИЕ НА СКЛАДЕ"';
    this.validation.reset();
  }
},
  validators:{
    'form.IName':function(value){
    return Validator.value(value).required();
    },
    'form.IPhone':function(value){
      return Validator.value(value).required().regex('[0-9]+');
    },
    'form.IMessage':function(value){
      return Validator.value(value).required();
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
                form_subject: 'Форма "ОН-ЛАЙН РАСЧЕТ СТОИМОСТИ КУЗОВНОГО РЕМОНТА"',
                chekedBS: false
              },
              percentCompleted: 0,
              block: true
        }
  },
  watch:{
      percentCompleted:function(){
        if(this.percentCompleted == 100){
          this.percentCompleted = 0;
          this.$parent.$emit('event'); 
          this.reset();       
          }
      }
    },
      methods:{
              onClick: function(e) {
                this.block = false;
                parent = this;
                this.$validate()
                .then(function(success){
                if(success == true){
                var files = parent.$refs.fileInputs.files;
                data = new FormData();
                data.append('IName', parent.form.IName);
                data.append('IMail', parent.form.IMail);
                data.append('IMessage',parent.form.IMessage);
                data.append('IPhone',parent.form.IPhone);
                data.append('form_subject',parent.form.form_subject);
                data.append('chekedBS',parent.form.chekedBS);
                if (files.length > 0) {
                    for (var i = 0; i < files.length; i++) {
                        data.append('file[]', files[i]);
                    }
                }
                /*data.forEach(function(item, i, data) {
                  console.log( i + ": " + item.name + " (массив:" + data + ")" );
                });*/
                /*var json_data = JSON.parse(JSON.stringify(parent.form));
                json_data.project_name=init_form_data.project_name;
                json_data.file = files;json_data*/
                /*console.log(files);
                config = {
                  headers: {
                    'content-type': 'multipart/form-data'
                  }
                };*/
                var config = {
                  headers: { 'Content-Type': 'multipart/form-data' } ,
                  onUploadProgress: function(progressEvent) {
                    parent.percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
                    parent.$forceUpdate();
                  }.bind(parent)
                };
                axios.post('mail_file.php', data, config)
                .then(function(response){console.log('success');console.log(response);NotyF({type:'success',text:"Запрос отправлен."});})
                .catch(function(e){console.log(e); parent.block = true; parent.percentCompleted = 0; NotyF({type:'error',text:"Ошибка."});});
                //parent.reset();
                //parent.$parent.$emit('event');
              }
            });
          },
          reset:function(){
            this.form.IName = "";
            this.form.IPhone = "";
            this.form.IMail = "";
            this.form.IMessage = "";
            this.form.form_subject =  'Форма "ОН-ЛАЙН РАСЧЕТ СТОИМОСТИ КУЗОВНОГО РЕМОНТА"';
            this.form.chekedBS =  false;
            this.percentCompleted = 0;
            this.block = true;
            this.getElementById("attachments").value = [];
            console.log(this.getElementById("attachments").value);
            document.getElementById("attachments").value = [];
            console.log(document.getElementById("attachments").value);
            this.validation.reset();
          }
        },
          validators:{
            'form.IName':function(value){
            return Validator.value(value).required();
            },
            'form.IPhone':function(value){
              return Validator.value(value).required().regex('[\+\(\)\-0-9]+', '');
            }
          }
});
new Vue({el:"#form-calculation-bodywork"});

// cascad-selector-app
Vue.component('cascad-selector', {
        template: '#cascad-selector-template',
        data: function() {
            return {

                old_form:null,
                form:{
                    selectedMark: "",
                    selectedModel: "",
                    selectedMileage: "",
                    aMarks: [],
                    aModel: [],
                    form_subject:'Форма "ОН-ЛАЙН РАСЧЕТ СТОИМОСТИ ПЛАНОВОГО ТО"'
                },
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
            }
        },
        created:function()
        {
          this.old_form = Object.assign({}, this.form);
        },
        methods:{
            onClick:function(){
                 var formData = {
                "selectedMark":this.form.selectedMark1,
                "selectedModel":this.form.selectedModel,
                "selectedMileage":this.form.selectedMileage,
                "form_subject":this.form.form_subject,
                }
                var json_data = JSON.parse(JSON.stringify(formData));
                json_data.project_name=init_form_data.project_name;
                //console.log(json_data);
                axios.post('calculation-to.php',json_data)
                .then(function(response){console.log('success');console.log(response);NotyF({type:'success',text:"Запрос отправлен."});})
                .catch(function(e){console.log(e);NotyF({type:'error',text:"Ошибка."});});

                this.form = Object.assign({}, this.old_form);
                this.$parent.$emit('event');
            }
        },
        computed: {
            selectedMark: function () {
                return this.form.selectedMark;
            },
            selectedModel: function () {
                return this.form.selectedModel;
            }
        },
        watch: {
            selectedMark: function() {
                // Clear previously selected values
                this.form.aMarks = [];
                this.form.aModel = [];
                this.form.selectedModel = "";
                this.form.selectedMileage = "";
                // Populate list of marks in the second dropdown
                if (this.form.selectedMark.length > 0) {
                    this.form.aMarks = this.Marks[this.form.selectedMark];
                }
                else{
                    this.form.aMarks = [];
                    this.form.aModel = [];
                    this.form.selectedModel = "";
                    this.form.selectedMileage = "";
                }
            },
            selectedModel: function() {
                // Clear previously selected values
                this.form.aModel = [];
                this.form.selectedMileage = "";
                // Now we have a continent and country. Populate list of model in the third dropdown
                if (this.form.selectedModel.length > 0) {
                    this.form.aModel = this.mileages;
                }
                else{
                    this.form.aModel = [];
                    this.form.selectedMileage = "";
                }
            }
        }
    })

    new Vue({
            el: "#form-cascad-selector"
        })

function createNoty(){
    new Noty({

        text: 'Заявка отправлена',

    }).show();
};

$(".toggle-mnu").click(function() {
      $(this).toggleClass("on");
      $(".main-mnu").slideToggle();
      return false;
});
