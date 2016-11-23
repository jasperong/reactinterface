var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
  getInitialState: function(){
    return {
      title: 'Appointments',
      show: true
    }
  },

  render: function() {
    var showTitle;
    if (this.state.show) {
      showTitle = 'New'
    };

    var displayList = {
      display: this.state.show ? 'block' : 'none',
      color: 'red'
    }

    return (
      <div className='inteface'>
        <h1>{showTitle} {this.state.title}</h1>
        <ul style={displayList}>
          <li>Buffy 3:30 PM</li>
          <li>Spot 2:30 PM</li>
        </ul>
      </div>
    );
  }
});

ReactDOM.render(
  <MainInterface />,
  document.getElementById('petAppointments')
)
