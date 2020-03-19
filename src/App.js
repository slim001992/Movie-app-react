import React from 'react';
import MovieApp from "./components/MovieApp.js"
import WithLoading from './components/WithLoading';
const AppWithLoading = WithLoading(MovieApp);
class App extends React.Component {
  state = {
    loading: false,
  }
  componentDidMount(){
    setTimeout(() => { 
      this.setState({loading: false})
    },5000)
}
render() {
    return (
      <AppWithLoading isLoading={this.state.loading}  />
    )
  }
}

export default App;