function openMailToWindow() {
  var support=('support@youclap.tech');

  var email = $("#cf_email").val();
  var subject = 'Question - '$("cf_name").val();

  var body = $("cf_commment").val();

  document.write('<a href="mailto:' + support +

  '?subject=' +subject+

  '&cc=' +email+

  '&body=' +body+

  '">' + 'Submit111' + '<'+'/a>');
}
