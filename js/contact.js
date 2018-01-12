// CONTACT FORM

$(function() {
	
	$('#contactForm input').focus(function() {
		$(this).val(' ');
	});
	
	$('#contactForm textarea').focus(function() {
        $(this).val('');
    });

	// when the Submit button is clicked...
	$('input#submit').click(function() {
	$('.error').hide().remove();
		//Inputed Strings
		var username = $('#name').val(),
			email = $('#email').val(),
			phone = $('#phone').val();
			comment = $('#comment').val();
		
	
		//Error Count
		var error_count;
		
		//Regex Strings
		var username_regex = /^[a-z0-9_-]{3,16}$/,
		    phone_regex = /^[a-z0-9_]{7,10}$/,
			email_regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		
			//Test Username
			if(!username_regex.test(name)) {
				$('#formAlerts').after('<p class=error>Nombre inválido!</p>');
				error_count += 1;
			}
			
			//Test Email
			if(!email_regex.test(email)) {
				$('#formAlerts').after('<p class=error>E-mail inválido</p>');
				error_count += 1;
			}
			//Test Phone
			if(!phone_regex.test(phone)) {
				$('#formAlerts').after('<p class=error>Número inválido</p>');
				error_count += 1;
			}
			//Blank Comment?
			if(comment == '') {
				$('#formAlerts').after('<p class=error>No se introdujo ningún comentario!</p>');
				error_count += 1;
			}
			
			//No Errors?
			if(error_count === 0) {
				$.ajax({
					type: "post",
					url: "send.php",
					data: "name=" + name + "&email=" + email + "&phone=" + phone + "&comment=" + comment,
					error: function() {
						$('.error').hide();
						$('#sendError').slideDown('slow');
					},
					success: function () {
						$('.error').hide();
						$('.success').slideDown('slow');
						$('form#contactForm').fadeOut('slow');
					}				
				});	
			}
			
			else {
                $('.error').show();
            }
			
		return false;
	});
	
	//if clear button is clicked
	$('input#clear').click(function (e) {
		// Reset the form incase of previous use.
		$('.success, .error').hide();
		$('form#contactForm').show();
		
		// Reset all the default values in the form fields
		$('#name').val('Nombre');
		$('#email').val('E-mail');
		$('#phone').val('Teléfono');
		$('#comment').val('Comentario o inquietud ...');
		
	});	
	
});