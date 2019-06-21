import React from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
// import 'bootstrap/scss/bootstrap.scss'
// import '@fortawesome/fontawesome-free/css/all.css'
// import 'scss/main.scss'
import Timeline from 'pages/Timeline'


const App = () => {
    return <Router>
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/timeline" component={Timeline} />
            </Switch>
            <Footer />
        </div>
    </Router>
}

const Header = () => {
    return <React.Fragment>
        <div className="header white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-auto-sm m-auto text-center font-size-48 museo d-none">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-yandex"></i>
                        <i className="fab fa-angular"></i>
                        n
                        <i className="far fa-copyright"></i>
                        <i className="fas fa-exclamation"></i>
                        <i className="fab fa-speakap"></i>
                    </div>
                    <div className="col-auto-sm font-size-48">
                    <i className="fa fa-chess"></i>
                    </div>
                    <div className="col">
                        <div className="menu">
                            <div className="menu__item mr-4">Resume</div>
                            <div className="menu__item mr-4">Experiences</div>
                            <div className="menu__item mr-4">Blogs</div>
                            <Link to="timeline" className="menu__item mr-4">Daily Timeline</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

const Body = () => {
    return <React.Fragment>
        <div className="body py-4 background-gray">
            <div className="container">

            </div>
        </div>
    </React.Fragment>
}

const Footer = () => {
    return <React.Fragment>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">FRANCIS SAMANDE DECLARO</div>
                    <div className="col text-right">+65 90109146 | francis.declaro.092283@gmail.com | linkedin</div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default App
