import React from 'react';
import axios from 'axios';
import Loading from './Loading.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true

    }
  }

  componentDidMount() {
    this.getData()
      .then(data => {
        this.setState({
          data: data,
          isLoading: false
        })
      })
  }

  getData = () => {
    return axios.get("http://5c92dbfae7b1a00014078e61.mockapi.io/owners")
      .then((res) => {
        return res.data
      })
      .catch(() => {
        console.log("Error")
      })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isLoading ?
          <Loading /> :
          <div>Data</div>
        }
      </React.Fragment>

    );
  }
};

export default App;
