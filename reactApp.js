class Team extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            shots: 0,
            score: 0
        }

        this.shotSound = new Audio('./assets/audio/Back+Board.mp3')
        this.scoreSound = new Audio('./assets/audio/Swish+2.mp3')
    }

    shotHandler = () => {
        let score = this.state.score
        this.shotSound.play()

        if (Math.random() > 0.5) {
            score += 1

            setTimeout(() => {
                this.scoreSound.play()
            }, 100)

        }

        this.setState((state, props) => ({
            shots: state.shots + 1,
            score
        }))
    }

    render() {
        let shotPercentageDiv
        if (this.state.shots) {
            const shotPercentage = Math.round((this.state.score / this.state.shots) * 100)
            shotPercentageDiv = (
                <div>
                    <strong>Shooting %: {shotPercentage} </strong>
                </div>
            )
        }
        return (
            <div className="Team">
                <h2>{this.props.name}</h2>

                <div className="identity">
                    <img src={this.props.logo} alt={this.props.name} />
                </div>

                <div>
                    <strong>Shots:</strong> {this.state.shots}
                </div>

                <div>
                    <strong>Score:</strong> {this.state.score}
                </div>

                {shotPercentageDiv}

                <button onClick={this.shotHandler}>Shoot!</button>
            </div>
        )
    }
}

function Game(props) {
    return (
        <div className="Game">
            <h1>Welcome to {props.venue}</h1>
            <div className="stats">
                <Team
                    name={props.visitingTeam.name}
                    logo={props.visitingTeam.logoSrc}
                />

                <div className="versus">
                    <h1>VS</h1>
                </div>

                <Team
                    name={props.homeTeam.name}
                    logo={props.homeTeam.logoSrc}
                />
            </div>
        </div>
    )
}

function App(props) {
    const husky = {
        name: 'Hazelwood Huskies',
        logoSrc: './images/Hazelwood Husky.jpg'
    }

    const penguin = {
        name: 'Parker Penguins',
        logoSrc: './images/Parker Penguin.jpg'
    }

    const kitty = {
        name: 'Kentucky Kitties',
        logoSrc: 'https://www.portlandmaine.com/wp-content/uploads/2017/03/kitten-basketball.jpg'
    }

    const bunny = {
        name: 'Buffalo Bunny',
        logoSrc: 'data:image/jpeg;base64,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'
    }

    return (
        <div className="App">
            <Game
                venue="Hazelwood Gym"
                homeTeam={husky}
                visitingTeam={penguin}
            />

            <Game
                venue="Buffalo Gym"
                homeTeam={bunny}
                visitingTeam={kitty}
            />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)