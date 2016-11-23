var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      myAppointments: []
    }
  },

  componentDidMount: function() {
    this.serverRequest = $.get('./js/data.json', function(results) {
      var tempApts = results;
      this.setState({
        myAppointments: tempApts
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    var filteredApts = this.state.myAppointments;

    filteredApts = filteredApts.map(function(item, i) {
      return (
        <li className='pet-item media' key={i}>
          <div className='pet-info media-body'>
            <div className='pet-head'>
              <span className='pet-name'>{this.state.myAppointments[i].petName}</span>
              <span className='apt-date pull-right'>{this.state.myAppointments[i].aptDate}</span>
            </div>
            <div className='owner-name'>
              <span className='label-item'>Owner: </span>
              {this.state.myAppointments[i].ownerName}
            </div>
            <div className='apt-notes'>
              {this.state.myAppointments[i].aptNotes}
            </div>
          </div>
        </li>
      )
    }.bind(this));

    return (
      <div className='inteface'>
        <ul className='item-list media-list'>
          {filteredApts}
        </ul>
      </div>
    );
  }
});

ReactDOM.render(
  <MainInterface />,
  document.getElementById('petAppointments')
)
