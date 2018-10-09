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
  .then((resp)=>{
   resp.json()})
   .then((res)=>{
   console.log(res);
   this.setState({data:res.videos})
   }) 
 }
  
 componentWillMount() {
  this.getData();
 }
  render() {
    return (
      <div> {
       this.state.data ?
       this.state.data.map((item)=>
       <div>
        <h3>{item.title}</h3> 
        <h3>{item.releaseVideo}</h3>
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
