(function() {
  
	var app = {
		
		initialize : function () {			
			this.modules();
			this.setUpListeners();
		},
 
		modules: function () {
 
		},
		setUpListeners: function () {
			$('form').on('submit',app.submitForm);
			
			if($('[id^=myDropdown]')){
				$('[id^=myDropdown]').find('.dd-option').on('click', app.removeError);
			}
			
			/*$('#fine-uploader-manual-trigger').data().fineuploader.uploader._handler.getFile(0)*/
			/*$('#fine-uploader-manual-trigger').data().fineuploader.uploader._handler*/
			
			/*$('#fine-uploader-manual-trigger').data().fineuploader.uploader.focus(app.removeError);*/
			$('form').on('keydown', 'input', app.removeError);
			$('form').on('keydown', 'textarea', app.removeError);
			$('form').on('click', "[type='checkbox']", app.removeError);
			$('form').on('click', "[type='checkbox']", app.choicedCheckbox);
			/*if($('[id^=checkbox]')){
				$('[id^=checkbox]').on('click', app.removeError);
			}*/
		},
 
		submitForm: function (e) {
			e.preventDefault();

			var form = $(this),
				submitBtn = form.find('button[type="submit"]');
			
			//app.validateForm(form);
			if(app.validateForm(form)===false) {
				return false;
			}else{
				submitBtn.attr('disabled','disabled');
			}
			
			
			console.log('go ajax');
			/*$.ajax({
				url: 'C:/Users/Bill/Desktop/mForm/js/server/mv1.js',
				type: 'POST',
				data: str
			})
			.done(function(msg){
				if(msg==='OK'){
					var result = "<div 'bg-success'>Спасибо за заявку</div>";
					form.html(result);
					console.log("success");
				}else{
					form.html(msg);
				}
			})
			.fail(function(){
				console.log("error");
			})
			.alway(function(){
				console.log("complete");
				submitBtn.removeAttr('disabled');
			});*/
		},
		validateForm: function(form){
			/*var inputs = form.find('input[class="dd-container"]');*/
			var valid = true;
			/*Start myDropdown*/
			var selector = form.find('.dd-container');
			if(selector.length!==0){
				$.each(selector, function(index, val){
					var select = $(val),
					formGroup = select.parents('.form-group');
					if(formGroup.length!==0){
						var ddslick = select.data().ddslick,
						data = ddslick.selectedData,
						label = ddslick.settings.selectText,
						textError = label;
						if(data === null){
							formGroup.addClass('has-error').removeClass('has-success');
							select.tooltip({
								trigger: 'manual',
								placement: 'top',
								title: textError
							}).tooltip('show');
							select.attr('data-toggle', 'tooltip');
							valid =false;
						}else{
							/*var value = data.text.value;*/
							select.tooltip('destroy');	
							formGroup.addClass('has-success').removeClass('has-error');
						}
					}
				});
			}
			/* End myDropdown*/
			var inputs = form.find('div[class="controls"],div[class="checkbox"]').find('[id^=Input], textarea, [id^=checkbox]');			
			if(inputs.length!==0){
				$.each(inputs, function(index, val){
					var input = $(val),
						formGroup = input.parents('.form-group');
					if(formGroup.length!==0){
						var val,
							label = formGroup.find('.control-label').text().toLowerCase(),
							inputType = input.context.type,
							textError = '';
						if(inputType === 'text' || inputType === 'email' ||inputType === 'textarea'){
							textError = 'Введите ' + label,
							val = input.val();
						}else if(inputType === 'checkbox'){
							textError = 'Выберите',
							val = input.context.checked;
						}
						if(inputType !== "checkbox" && val.length === 0){
							app.IHE(formGroup,input,textError);
							valid =false;
						}else if(inputType === "checkbox" && val === false){
							app.IHE(formGroup,input,textError);
							valid =false;
						}else{		
							app.IHS(formGroup,input);
						}
					}
				});	
					
			}	
			return valid;
		},
		
		removeError: function(){
			console.log();
			
			var formGroup = $(this).parents('.form-group'),
			tTipe = formGroup.find('[data-toggle=tooltip]');
			if(formGroup.find('[data-toggle=tooltip]').val() !== undefined){
				formGroup.addClass('has-success').removeClass('has-error');
				tTipe.tooltip('destroy');
			}else if(formGroup.find('[data-toggle=tooltip]').val() === undefined){
				formGroup.removeClass('has-error').removeClass('has-success');
			}
		},
		/*InputHasSuccess*/
		IHE: function(formGroup,input,textError){
			formGroup.addClass('has-error').removeClass('has-success');
			input.tooltip({
				trigger: 'manual',
				placement: 'top',
				title: textError
			}).tooltip('show');
			input.attr('data-toggle', 'tooltip');
		},
		/*InputHasSuccess*/
		IHS: function(formGroup,input){
			input.tooltip('destroy');
			formGroup.addClass('has-success').removeClass('has-error');
		},
		/*BlockBtn*/
		choicedCheckbox: function(){
			var box = $(this),
				btn = box.parents('form').find("[id^='send']");
			if(btn.length!==0){
				if(box.context.checked){
					btn.prop('disabled', false);
				}else{
					btn.prop('disabled', true);
				}
			}
		}
	}
 
	app.initialize();
 
}());