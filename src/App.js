import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    }
  }

  getData() {
    fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCD8nJj05or-n459LxRrR1kgDFabagdvTo&maxResults=5&part=snippet&q=motogp')
      .then(response => response.json())
      .then(data => {
        console.log('vaggos', data.items);
        this.setState({ data: data.items });
      });
  }

  componentWillMount() {
    this.getData();
  }

  render() {


    return (
      this.state.data ?
        this.state.data.map(function (item) {
          console.log(item)
          return (
            <div key={item.id.videoId}>
              <img src={item.snippet.thumbnails.default.url} alt="" />
            </div>
          );
        })
        :
        <p>aaa</p>
    );
  }
}

export default App;
