(function () {
  $('form').submit(function (e) {
    e.preventDefault();
    const email = $('#email').val();
    const password = $('#password').val();

    if (!email) {
      $('#email').siblings('.invalid-feedback').addClass('was-validated').text('邮箱不能为空');
      return;
    } else {
      $('#email').siblings('.invalid-feedback').removeClass('was-validated').text('');
    }

    if (!password) {
      $('#password').siblings('.invalid-feedback').addClass('was-validated').text('密码不能为空');
      return;
    } else {
      $('#password').siblings('.invalid-feedback').removeClass('was-validated').text('');
    }

    $('#submit').addClass('disabled');

    $.ajax({
      type: 'POST',
      url: '/api/v1/login',
      data: { email, password },
      dataType: 'json',
      success: function (data) {
        if (data.code !== 0) {
          $('#submit').removeClass('disabled');
          $('#submit').siblings('.invalid-feedback').addClass('was-validated').text(data.msg);
        } else {
          localStorage.setItem('token', data.token);
          location.href = '/';
        }
      },
      fail: function () {
        $('#submit').removeClass('disabled');
      },
    });
  });
})();
