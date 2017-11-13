$('#send3').click(function(){
	$( "#trigger-upload" ).click();/*Upload*/
});

 $('#fine-uploader-manual-trigger').fineUploader({
            template: 'qq-template-manual-trigger',
            request: {
                endpoint: '/server/uploads'
            },
            thumbnails: {
                placeholders: {
                 /*  waitingPath: './css/placeholders/waiting-generic.png',
                   notAvailablePath: './css/placeholders/not_available-generic.png'*/
                }
            },
            validation: {
                allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
            },
            autoUpload: false
        });

        $('#trigger-upload').click(function() {
            $('#fine-uploader-manual-trigger').fineUploader('uploadStoredFiles');
});
		