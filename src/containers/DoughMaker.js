import React, { Component } from 'react';
import classes from './DoughMaker.module.css';

import Ingredients from '../components/ingredients/Ingredients';

class DoughMaker extends Component {

    state = {
        input: '',
        balls: '',
        water: '',
        flour: '',
        yeast: '',
        salt: ''
    }


    ballsSubmitHandler = (event) => {
        event.preventDefault();
        let ballsAmount = this.state.input;
        let waterAmount = 84 * ballsAmount;
        let flourAmount = 145 * ballsAmount;
        let yeastAmount = 0.5 * ballsAmount;
        let saltAmount = 4 * ballsAmount;

        this.setState({
            balls: this.state.input,
            water: waterAmount,
            flour: flourAmount,
            yeast: yeastAmount,
            salt: saltAmount
        })


        console.log(this.state.water)
    }

    ballsInputHandler = (event) => {
        this.setState({ input: event.target.value })
    }


    render() {




        return (
            <div className={classes.DoughMaker}>
                <form onSubmit={this.ballsSubmitHandler}>
                    <input
                        className={classes.Input}
                        onChange={this.ballsInputHandler}
                        value={this.state.value}
                        type="text"
                        placeholder="How many balls?" />
                    <button
                        className={classes.Button}

                    >Submit</button>
                    <Ingredients
                        balls={this.state.balls}
                        water={this.state.water}
                        flour={this.state.flour}
                        yeast={this.state.yeast}
                        salt={this.state.salt}
                    />
                </form>

            </div>
        );
    }
}

export default DoughMaker;
