var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var AddForm = React.createClass({

  render: function() {
    return (
      <div className="well">
        <h3>Add Contact</h3>

        <form>
          <div className="form-group">
            <input type="text" ref="name" className="form-control" placeholder="Add Contact First & Last Name" />
          </div>
          <div className="form-group">
            <input type="text" ref="phone" className="form-control" placeholder="Add Contact Phone Number" />
          </div>
          <div className="form-group">
            <input type="text" ref="email" className="form-control" placeholder="Add Contact Email address" />
          </div>
        </form>
      </div>
    )
  }
});

module.exports = AddForm;