import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/" target="_self" >
                        <img src="https://image.flaticon.com/icons/svg/911/911176.svg" width="40" height="40"></img>
                          EasyCooking
                    </a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/sign_up" target="_self"><button type="button" className="btn btn-outline-warning">SignUp</button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sign_in" target="_self"><button type="button" className="btn btn-outline-warning">Login</button></a>
                        </li>

                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header