var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddForm = require('./Addform');

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
      </div>
    )
  }
});

module.exports = App;