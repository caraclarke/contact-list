var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  saveContact: function(contact) {
    console.log(contact);
  }
}

module.exports = AppActions;