var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
  getInitialState: function(){
    return {
      data: [
              {
                "petName": "Buffy",
                "ownerName": "Hassum Harrod",
                "aptDate": "2016-06-20 15:30",
                "aptNotes": "This Chihuahua has not eaten for three days and is lethargic"
              },
              {
                "petName": "Spot",
                "ownerName": "Constance Smith",
                "aptDate": "2016-06-24 08:30",
                "aptNotes": "This German Shepherd is having some back pain"
              },
              {
                "petName": "Goldie",
                "ownerName": "Barot Bellingham",
                "aptDate": "2016-06-22 15:50",
                "aptNotes": "This Goldfish has some weird spots in the belly"
              },
              {
                "petName": "Mitten",
                "ownerName": "Hillary Goldwyn",
                "aptDate": "2016-06-21 9:15",
                "aptNotes": "Cat has excessive hairballs"
              }
            ]
    }
  },

  render: function() {
    var filteredApts = this.state.data;

    filteredApts = filteredApts.map(function(item, i) {
      return (
        <li className='pet-item media' key={i}>
          <div className='pet-info media-body'>
            <div className='pet-head'>
              <span className='pet-name'>{this.state.data[i].petName}</span>
              <span className='apt-date pull-right'>{this.state.data[i].aptDate}</span>
            </div>
            <div className='owner-name'>
              <span className='label-item'>Owner: </span>
              {this.state.data[i].ownerName}
            </div>
            <div className='apt-notes'>
              {this.state.data[i].aptNotes}
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
