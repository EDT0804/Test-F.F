import React from 'react';
import standards from 'standards.json';
import { getPassFail, getNextLowestKey, getNextHighestKey } from 'utils/Helpers';
import Sidebar from 'components/Sidebar';
import Main from 'components/Main';
import Footer from 'components/Footer';
import ResultsDial from 'components/ResultsDial';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gender: 'male',
      age: '18-26',
      count: {
        ssh: '0',
        po: '0',
        kl: '0',
        np: '0',
        mp: '0',
        min: '00',
        sec: '00'
      },
      score: {
        ssh: 0,
        po: 0,
        kl: 0,
        np: 0,
        mp: 0,
        run: 0,
        total: 0
      },
      pass: {
        ssh: false,
        po: false,
        kl: false,
        np: false,
        mp: false,
        run: false
      },
        error: {
        ssh: false,
        po: false,
        kl: false,
        np: false,
        mp: false,
        run: false
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
  }

  handleChange(event) {
   const value = event.target.value;
    const id = event.replace('sufsk_', '');target.id;
  }

  calculateScore() {
    const { gender, age, count } = this.state;
    const { standards, timeArray } = standards;

    // calculate scores for each event
    const sshFinal = standards[gender]['ssh'][count.ssh][age];
    const poFinal = standards[gender]['po'][count.po][age];
    const klFinal = standards[gender]['kl'][count.kl][age];
    const npFinal = standards[gender]['np'][count.np][age];
    const mpFinal = standards[gender]['mp'][count.mp][age];

    const score = {
      ssh: sshFinal,
      po: poFinal,
      kl: klFinal,
      np: npFinal,
      mp: mpFinal,
      run: 0,
      total: 0
    };

    // check if run time is 0
    if ((count.min + count.sec) === '0') {
      score.run = 0;
    } else {
      // filter user run time to be taken from available time
      const runFinal = getNextHighestKey(timeArray, (count.min + count.sec));
      score.run = standards[gender]['run'][runFinal][0][age];
    }

    score.total = score.ssh + score.po + score.kl + score.np + score.mp + score.run;

    // get pass/fail (boolean)
    const pass = {
      ssh: getPassFail(score.ssh),
      po: getPassFail(score.po),
      kl: getPassFail(score.kl),
      np: getPassFail(score.np),
      mp: getPassFail(score.mp),
      run: getPassFail(score.run)
    };

    this.setState({ score, pass });
  }

  render() {
    return (
      <div className="SUFSK">
        <Sidebar handleChange={this.handleChange} age={this.state.age} />
        <ResultsDial handleChange={this.handleChange} score={this.state.score} pass={this.state.pass} r="60" />
        <Main handleChange={this.handleChange} score={this.state.score} gender={this.state.gender} count={this.state.count} />
        <Footer />
        </div>
    );
  }
}

export default App;
