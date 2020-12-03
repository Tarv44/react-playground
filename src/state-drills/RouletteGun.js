import React from 'react'

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }

    state = {
        chamber: null,
        spinningTheChamber: false
    }

    pullTrigger = () => {
        this.setState({spinningTheChamber: true})

        this.timeout = setTimeout(() => {
            const chamberPull = Math.floor(Math.random() * 8) + 1
            this.setState({
                chamber: chamberPull, 
                spinningTheChamber: false
            })
        }, 2000)
    }

    displayRoulette() {
        const {bulletInChamber} = this.props
        if (this.state.spinningTheChamber) {
            return "spinning the chamber and pulling the trigger! ...."
        } else if (bulletInChamber === this.state.chamber) {
            return "BANG!!!"
        } else {
            return "You're Safe!!"
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
    
    render() {
        return (
            <div>
                <p>{this.displayRoulette()}</p>
                <button
                    onClick={this.pullTrigger}
                >Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun