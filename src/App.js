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
        <iframe width= "120"
height="90" src="https://yt3.ggpht.com/-DKtSK5AJj2M/AAAAAAAAAAI/AAAAAAAAAAA/3Expi7LdG-k/s88-c-k-no-mo-rj-c0xffffff/photo.jpg">
</iframe> 

<iframe width= "120"
height="90" src="https://i.ytimg.com/vi/7A2-nreoKro/default.jpg">
</iframe>

<iframe width= "120"
height="90" src="https://i.ytimg.com/vi/AkzPwc5tuSY/default.jpg">
</iframe> 

<iframe width= "120"
height="90" src="https://i.ytimg.com/vi/MW9Wt9secVA/default.jpg">
</iframe> 

<iframe width= "120"
height="90" src="https://i.ytimg.com/vi/ehXu9KF-iPs/default.jpg">
</iframe> 
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
