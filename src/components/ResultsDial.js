import React from 'react';
import './ResultsDial.scss';
import { getCircumference } from './../utils/Helpers';

class ResultsDial extends React.Component {

    getOffset(r, score) {
        return (getCircumference(r) / 600) * score;
    }

    render() {
        return(
            <div className="ResultsDial">
                <div className="container">
                    <div className="dial-wrapper">
                        <div className="total-group">
                            <p className="label"></p>
                            <p className="score">{this.props.score.total}</p>
                        </div>
                        <div className="score-group">
                            <div className="columns">
                                <div className="column">
                                    <p className="label">SSH</p>
                                    <p className="score">{this.props.score.ssh}</p>
                                </div>
                                <div className="column">
                                    <p className="label">PO</p>
                                    <p className="score">{this.props.score.po}</p>
                                </div>
                                <div className="column">
                                    <p className="label">KL</p>
                                    <p className="score">{this.props.score.kl}</p>
                                    </div>
                                    <div className="column">
                                    <p className="label">NP</p>
                                    <p className="score">{this.props.score.np}</p>
                                    </div>
                                    <div className="column">
                                    <p className="label">MP</p>
                                    <p className="score">{this.props.score.mp}</p>
                                    </div>
                                <div className="column">
                                    <p className="label">2KMVRAPIM</p>
                                    <p className="score">{this.props.score.run}</p>
                                </div>
                            </div>
                        </div>
                        <div className="svg radial-progress">
                            {/* ViewBox should should be double the radius. */}
                            <svg viewBox="0 0 140 140" preserveAspectRatio="xMinYMin meet" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <circle className="radial-progress-background"
                                    r={this.props.r}
                                    cx="50%"
                                    cy="50%"
                                    fill="transparent"
                                    strokeDasharray={getCircumference(this.props.r)}
                                    strokeDashoffset="0">
                                </circle>
                                <circle className="radial-progress-cover"
                                    r={this.props.r}
                                    cx="50%"
                                    cy="50%"
                                    fill="transparent"
                                    strokeDasharray={getCircumference(this.props.r)}
                                    strokeDashoffset={this.getOffset(this.props.r, this.props.score.total)}>
                                </circle>
                                <circle className="radial-progress-center"
                                    r={this.props.r}
                                    cx="50%"
                                    cy="50%"
                                    fill="transparent"
                                    strokeDasharray={getCircumference(this.props.r)}
                                    strokeDashoffset="0">
                                </circle>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultsDial;
