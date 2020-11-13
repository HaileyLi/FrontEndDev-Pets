import React from 'react';
import axios from 'axios';
import Loading from './Components/Loading.jsx'
import Display from './Components/Display.jsx';

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
        let maleCat = []
        let femaleCat = []

        data.forEach((item, i) => {
          if (item.gender === "Male") {
            if (item.pets !== null) {
              item.pets.forEach((pet, ind) => {
                if (pet.type === "Cat") {
                  maleCat.push(pet.name)
                }
              })
            }

          } else {
            if (item.pets !== null) {
              item.pets.forEach((pet, ind) => {
                if (pet.type === "Cat") {
                  femaleCat.push(pet.name)
                }
              })
            }
          }
        }
        )
        this.setState({
          maleCat: maleCat,
          femaleCat: femaleCat,
          isLoading: false
        })
      })
  }

  getData = () => {
    return axios.get("https://5c92dbfae7b1a00014078e61.mockapi.io/owners")
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
          <Display maleCat={this.state.maleCat} femaleCat={this.state.femaleCat} />
        }
      </React.Fragment>

    );
  }
};

export default App;
