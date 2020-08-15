;(function () {
  $('form').submit(function (e) {
    e.preventDefault()
    var name = $('#name').val()
    var email = $('#email').val()
    var password = $('#password').val()

    if (!name) {
      $('#name')
        .siblings('.invalid-feedback')
        .addClass('was-validated')
        .text('用户名不能为空')
      return
    } else {
      $('#name')
        .siblings('.invalid-feedback')
        .removeClass('was-validated')
        .text('')
    }

    if (!email) {
      $('#email')
        .siblings('.invalid-feedback')
        .addClass('was-validated')
        .text('邮箱不能为空')
      return
    } else {
      $('#email')
        .siblings('.invalid-feedback')
        .removeClass('was-validated')
        .text('')
    }

    if (!password) {
      $('#password')
        .siblings('.invalid-feedback')
        .addClass('was-validated')
        .text('密码不能为空')
      return
    } else {
      $('#password')
        .siblings('.invalid-feedback')
        .removeClass('was-validated')
        .text('')
    }

    $('#submit').addClass('disabled')

    $.ajax({
      type: 'POST',
      url: '/api/v1/register',
      data: { email, password, name },
      dataType: 'json',
      success: function (data) {
        console.log(data)
        if (data.code !== 0) {
          $('#submit').removeClass('disabled')
          $('#submit')
            .siblings('.invalid-feedback')
            .addClass('was-validated')
            .text(data.msg)
        } else {
          location.href = '/login'
        }
      },
      fail: function () {
        $('#submit').removeClass('disabled')
      }
    })
  })
})()
