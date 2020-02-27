import React, { Component } from 'react';

// function Detail({location}) {
//   // console.log(props)
//   console.log(location)
//   return (
//     <span>hello</span>
//   );
// }

class Detail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    console.log(location)
    if (location.state == undefined) { // 해당 페이지에서 새로고침할 경우 undefined가 나옴
      //console.log(this.props) // history.goBack()
      history.push('/'); // redirect
    }
  }
  render() {
    const { location } = this.props;
    if ( location.state ) {
      return (
        <span>{location.state.title}</span>
      )
    } else {
      return null;
    }
  }
} 

export default Detail;