import React, { Component } from 'react';

class App extends Component
{
  constructor()
  {
    super();
    this.state = {
      data: null,
      iframe_url: ''
    }
  }

  handleClick = (videoID) =>
  {
    console.log(videoID);
  }

  getData()
  {
    fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCD8nJj05or-n459LxRrR1kgDFabagdvTo&maxResults=5&part=snippet&q=motogp')
      .then(response => response.json())
      .then(data =>
      {
        this.setState({
          data: data.items,
          iframe_url: 'https://www.youtube.com/embed/' + data.items[0].id.videoId,
        });
      });
  }

  componentDidMount()
  {
    this.getData();
  }
  render()
  {
    let me = this;
    let photos = <p>Wait...Fetching data.</p>;
    if (this.state.data !== null)
    {
      console.log('state data is not null')
      photos = this.state.data.map(function(item)
      {
        return (
          <div key={item.id.videoId} onClick={() => me.handleClick(item.id.videoId)}>
            <img src={item.snippet.thumbnails.default.url} alt="" />
          </div>
        );
      })
    }

    return (
      <div>
        {photos}
        <iframe src={this.state.iframe_url} width="840" height="630" align="right"> </iframe >
      </div>
    );
  }
}

export default App;
