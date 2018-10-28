import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      iframe_url: ''
    }
  }
  getData() {
    fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCD8nJj05or-n459LxRrR1kgDFabagdvTo&maxResults=5&part=snippet&q=motogp')
      .then(response => response.json())
      .then(data => {
        console.log('vaggos', data.items);
        this.setState({
          data: data.items,
          iframe_url: 'https://www.youtube.com/embed/' + data.items[0].id.videoId

        });
      });
  }
  componentWillMount() {
    this.getData();
  }
  render() {
    let photos = this.state.data ?
      this.state.data.map(function (item) {
        console.log(item)
        return (
          <div key={item.id.videoId}>
            <img src={item.snippet.thumbnails.default.url} alt="" />
          </div>
        );
      })
      :
      <p> Wait...Fetching data.</p>;


    return (

      <div>
        {photos}
        <iframe src={this.state.iframe_url}></iframe>
      </div>
    );
  }
}


export default App;
