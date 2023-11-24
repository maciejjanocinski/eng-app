import React from 'react';
import "../component-styles/landingPage.scss"
class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToEndpoint: null
        };
    }

    handleEndpointClick = (endpoint) => {
        this.setState({redirectToEndpoint: endpoint});
    };

    render() {
        const {redirectToEndpoint} = this.state;

        if (redirectToEndpoint) {
            window.location.href = redirectToEndpoint;
            return null;
        }

        return (
            <div className={"wrapper"}>
                <h1>Witaj na stronie nauki angielskiego!</h1>
                <p>Strona została wykonana w ramach zaliczenia przedmiotu w
                    Wyższej Szkole Innowacji i Ekonomii w Lublinie przez Macieja Janocińskiego (39517)

                </p>
                <br/>
                <p>Wybierz opcję nauki:</p>

                <div className="wrapper__buttons">
                    <button onClick={() => this.handleEndpointClick('/abcd')}>
                        Test ABCD
                    </button>
                    <button onClick={() => this.handleEndpointClick('/irregularVerbs')}>
                        Czasowniki nieregularne
                    </button>


                </div>

            </div>
        );
    }
}

export default LandingPage;
