
var _apiKey='beak'
var _contacts = {};
var _contactId = null;

$(document).on('pagebeforeshow', '#home-page', function() {
  var contactList = $('#contact-list')
  contactList.html('')
  $.get(
    'http://contacts.tinyapollo.com/contacts?key=' + _apiKey,
    function(result){
      _contacts = {}
      for (i in result.contacts) {
        var contact = result.contacts[i]
        _contacts[contact._id] = contact
        contactList.append('<li><a href="#details-page" data-contact-id ="'+
        contact._id + '">' +
        contact.name + '</a></li>')
      }
      contactList.listview('refresh')
    })
    console.log('end')
})

$(document).on('click', '#contact-list a', function() {
  var link = $(this)
  _contactId = link.data('contact-id')
  console.log('clicked ' + _contactId)
  return true
})

$(document).on('pagebeforeshow', '#details-page', function() {
  var contact = _contacts[_contactId]
  $('.contact-details').text(contact.name + ' details')
})
