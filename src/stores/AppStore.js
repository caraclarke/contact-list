var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI');

var CHANGE_EVENT = 'change';

var _contacts = [];

// create appStore variable
var AppStore = assign({}, EventEmitter.prototype, {

  saveContact: function(contact) {
    _contacts.push(contact);
  },

  getContacts: function() {
    return _contacts;
  },

  setContacts: function(contacts) {
    _contacts = contacts;
  },

  emitchange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(cb) {
    this.on('change', cb);
  },

  removeChangeListener: function(cb) {
    this.removeListener('change', cb);
  }

});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case AppConstants.SAVE_CONTACT:
      // Store Save
      AppStore.saveContact(action.contact);
      // Save to API
      AppAPI.saveContact(action.contact);
      // emit change
      AppStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.RECEIVE_CONTACTS:
			// Store Save
			AppStore.setContacts(action.contacts);
			//Emit Change
			AppStore.emit(CHANGE_EVENT);
			break;
  }

  return true;
});

module.exports = AppStore;