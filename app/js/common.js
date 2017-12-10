"use strict";

//слайдер
new Vue({
  el: '#vueapp',
  data: {
    slides: [
    {
      url: 'assets/img/licence/license-01.jpg'
    },

    {
      url: 'assets/img/licence/license-02.jpg'
    },

    {
      url: 'assets/img/licence/license-03.jpg'
    },

    {
      url: 'assets/img/licence/license-04.jpg'
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
    },
    created:function(){
      this.$on('event',function(){this.close();});
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
    },
    created:function(){
      this.$on('event',function(){this.close();});
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
/*new Vue({
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
                aModel: [],
                form_subject:'Форма "ОН-ЛАЙН РАСЧЕТ СТОИМОСТИ ПЛАНОВОГО ТО"'

            },
            methods:{
                onClick:function(){
                var formData = {
                "selectedMark":this.selectedMark,
                "selectedModel":this.selectedModel,
                "selectedMileage":this.selectedMileage,
                "form_subject":this.form_subject,
                }
                var json_data = JSON.parse(JSON.stringify(formData));
                json_data.project_name=init_form_data.project_name;
                console.log(json_data);
                axios.post('calculation-to.php',json_data)
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
        });*/

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
            console.log(json_data);
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
                FILES:{},
                form_subject: 'Форма "ОН-ЛАЙН РАСЧЕТ СТОИМОСТИ КУЗОВНОГО РЕМОНТА"',
                chekedBS: false
              }
        }
  },
      methods:{
              onClick: function(e) {
                parent = this;
                this.$validate()
                .then(function(success){
                if(success == true){
                parent.$parent.$emit('event');
                var files = parent.$refs.fileInputs.files;
                var json_data = JSON.parse(JSON.stringify(parent.form));
                json_data.project_name=init_form_data.project_name;
                json_data.FILES = files;
                axios.post('mail.php',json_data)
                .then(function(response){console.log('success');console.log(response);NotyF({type:'success',text:"Запрос отправлен."});})
                .catch(function(e){console.log(e);NotyF({type:'error',text:"Ошибка."});});
                parent.reset();//this.form = Object.assign({}, this.old_form);
              }
            });
          },
          reset:function(){
            this.form.IName = "";
            this.form.IPhone = "";
            this.form.IMail = "";
            this.form.IMessage = "";
            this.form.FILES = {};
            this.form.form_subject =  'Форма "ОН-ЛАЙН РАСЧЕТ СТОИМОСТИ КУЗОВНОГО РЕМОНТА"';
            this.form.chekedBS =  false;
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
            'form.IMail':function(value){
              return Validator.value(value).email();
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
