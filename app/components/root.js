import React from 'react';
import CandiesList from './CandiesList';
import axios from 'axios';

// const Root = () => {
//   return (
//     <div>
//       <nav>Goodie Bag</nav>
//       <main>
//         <h1>Welcome to the Goodie Bag!</h1>
//         <p>What a nice home page for your goodies!</p>
//       </main>
//       <div className="navbar">
//         <CandiesList candies={[]} />
//       </div>
//     </div>
//   );
// };

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      candies: [],
    };
  }

  async componentDidMount() {
    const candies = await axios.get('/api/candies');
    const candiesData = candies.data;
    this.setState({
      candies: candiesData,
    });
  }

  render() {
    return (
      <div>
        <nav>Goodie Bag</nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
        </main>
        <div className="candy rows">
          <CandiesList candies={this.state.candies} />
        </div>
      </div>
    );
  }
}

export default Root;
