(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Login 
     $(document).ready(function() {
            // Predefined credentials (for demo only - in production use server-side auth)
            const validCredentials = {
                "admin": "amplefit123",
                "trainer": "gymtrainer456",
                "member": "workout789"
            };

            // Check if credentials are saved in localStorage (remember me)
            if (localStorage.getItem('rememberedUser')) {
                const rememberedUser = JSON.parse(localStorage.getItem('rememberedUser'));
                $('#username').val(rememberedUser.username);
                $('#password').val(rememberedUser.password);
                $('#remember').prop('checked', true);
            }

            $('#loginForm').submit(function(e) {
                e.preventDefault();
                $('#errorMessage').text(''); // Clear previous errors
                $('#notusername').hide().text('');
                $('#notpassword').hide().text('');
                $('.is-invalid').removeClass('is-invalid');
                $('.has-error').removeClass('has-error');

                const username = $('#username').val().trim();
                const password = $('#password').val();
                const rememberMe = $('#remember').is(':checked');

                let isValid = true;

                // Validate username
                if (!username) {
                    $('#notusername').text("Username is required").show();
                    $('#username').addClass('is-invalid');
                    $('#username').closest('.input-group').addClass('has-error');
                    isValid = false;
                }

                // Validate password
                if (!password) {
                    $('#notpassword').text("Password is required").show();
                    $('#password').addClass('is-invalid');
                    $('#password').closest('.input-group').addClass('has-error');
                    isValid = false;
                }

                if (!isValid) return;

                // Check credentials
                if (username === 'amplefit' && password === 'amplefit123') {
                    // Show success message
                    $("#errorMessage").text("Successfully logged in! Redirecting...").css('color', 'green');

                    // Show alert message
                    alert("Login successful! You will be redirected to the dashboard.");

                    // Redirect after 1 second
                    setTimeout(function() {
                        window.location.href = "dashboard.html";
                    }, 1000);
                } else {
                    $("#errorMessage").text("Invalid username or password").css('color', '#dc3545');
                }
            });

            // Clear errors when user starts typing
            $('#username, #password').on('input', function() {
                $(this).removeClass('is-invalid');
                $(this).closest('.input-group').removeClass('has-error');
                $(`#not${this.id}`).hide();
            });
        });
})(jQuery);

