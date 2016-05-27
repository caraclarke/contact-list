var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddForm = require('./Addform');
var ContactList = require('./ContactList');

function getAppState() {
  return {
    contacts: AppStore.getContacts()
  }
}

var App = React.createClass({

  getInitialState: function(){
		return getAppState();
	},

  render: function() {
    return (
      <div>
        <AddForm />
        <ContactList contacts={this.state.contacts} />
      </div>
    )
  }
});

module.exports = App;