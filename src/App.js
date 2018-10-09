import React, { Component } from 'react';


class App extends Component {
 constructor() {
 super();
 this.state={
  data:null, 
 } 
  
 }
 getData() {
  fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCD8nJj05or-n459LxRrR1kgDFabagdvTo&maxResults=5&part=snippet&q=motogp')
  .then(response => response.json())
  .then(data => {
    console.log('vaggos', data.items);
    this.setState({data: data.items});
  });
 }
  
 componentWillMount() {
  this.getData();
 }

  render() {
    return (
      <div> {
       this.state.data ?
       this.state.data.map((item)=>

       
       <div key={item.id.videoId}>
        kkk
       </div>

      )
       :
       <h3>Wait...data is fetching.</h3>

      }
      </div>
    );
  }
}

export default App;
