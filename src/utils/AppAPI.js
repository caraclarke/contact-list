var Firebase = require('firebase');
var AppActions = require('../actions/AppActions');

module.exports = {
  saveContact: function(contact) {
    this.firebaseRef = new Firebase('https://reactcontact.firebaseIO.com/reactcontact');
    this.firebaseRef.push({
      contact: contact
    });
  }
}