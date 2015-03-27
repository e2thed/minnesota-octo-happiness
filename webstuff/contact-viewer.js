
var _apiKey='beak'
var _contacts = {};
var _contactId = null;

/*
$(document).on('pagebeforeshow', '#home-page', function() {
  var contactList = $('#contact-list')
  contactList.html('')
  $.get(
    'http://contacts.tinyapollo.com/contacts?key=' + _apiKey,
    getContacts(),
    function(result){
      _contacts = {}
      for (i in result.contacts) {
        var contact = result.contacts[i]
        _contacts[contact._id] = contact
        contactList.append('<li><a href="#details-page" data-contact-id="'+
        contact._id + '">' +
        contact.name + '</a></li>')
      }
      contactList.listview('refresh')
    })
    console.log('end')
})
*/
$(document).on('pagebeforeshow', '#home-page', function() {
  var contactList = $('#contact-list')
  contactList.html('')
  var result = getContacts()
  _contacts = {}
  for (i in result.contacts) {
    var contact = result.contacts[i]
        _contacts[contact._id] = contact
        contactList.append('<li><a href="#details-page" data-contact-id="'+
        contact._id + '">' +
        contact.name + '</a></li>')
    }
   contactList.listview('refresh')
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
  $('#contact-name').text(contact.name)
  $('#contact-title').text(contact.title)
  $('#contact-phone').text(contact.phone)
  $('#contact-email').text(contact.email)
  $('#contact-twitter').text(contact.twitterId)
})

function getContacts()
{
  return  {
status: "success",
message: "Successfully retrieved contacts",
group: {
key: "bricked",
name: "Bricked Phone Club",
_id: "54e8c75fa3609e0a4c000006"
},
contacts: [
{
groupId: "54e8c75fa3609e0a4c000006",
name: "Hoban Washburne",
title: "Pilot",
email: "wash@serenity.com",
phone: "612-555-9012",
twitterId: "wash",
_id: "550777e66f3ea25175008046"
},
{
groupId: "54e8c75fa3609e0a4c000006",
name: "Jayne Cobb",
title: "Muscle",
email: "jayne@serenity.com",
phone: "612-555-3456",
twitterId: "heroofcanton",
_id: "550777e66f3ea25175008047"
},
{
groupId: "54e8c75fa3609e0a4c000006",
name: "Kaylee Frye",
title: "Engineer",
email: "kaylee@serenity.com",
phone: "612-555-7890",
twitterId: "kaylee",
_id: "550777e66f3ea25175008048"
},
{
groupId: "54e8c75fa3609e0a4c000006",
name: "Malcom Reynolds",
title: "Captain",
email: "mal@serenity.com",
phone: "612-555-1234",
twitterId: "malcomreynolds",
_id: "550777e66f3ea25175008044"
},
{
name: "Miraya",
title: "Singer",
email: "sendsmiles@yahoo.com",
phone: "5556667777",
groupId: "54e8c75fa3609e0a4c000006",
_id: "550778696f3ea251750080cc"
},
{
groupId: "54e8c75fa3609e0a4c000006",
name: "River Tam",
title: "Doctor's Sister",
email: "river@serenity.com",
phone: "612-555-8765",
twitterId: "miranda",
_id: "550777e66f3ea2517500804a"
},
{
groupId: "54e8c75fa3609e0a4c000006",
name: "Shepherd Book",
title: "Shepherd",
email: "shepherd@serenity.com",
phone: "612-555-2109",
twitterId: "shepherdbook",
_id: "550777e66f3ea2517500804b"
},
{
groupId: "54e8c75fa3609e0a4c000006",
name: "Simon Tam",
title: "Doctor",
email: "simon@serenity.com",
phone: "612-555-4321",
twitterId: "simontam",
_id: "550777e66f3ea25175008049"
},
{
_id: "550b13576f3ea2517500cd42",
email: "emailme@gmail.com",
groupId: "54e8c75fa3609e0a4c000006",
name: "Vandana",
phone: "2344567897",
title: "Student",
twitterId: "sendsmiles"
},
{
groupId: "54e8c75fa3609e0a4c000006",
name: "Zoe Washburne",
title: "First Mate",
email: "zoe@serenity.com",
phone: "612-555-5678",
twitterId: "zoewashburne",
_id: "550777e66f3ea25175008045"
}
]
}
}