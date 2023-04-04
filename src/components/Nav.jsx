import React from 'react'

export default function Nav({ username, city }) {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">Welcome {username} from {city}</a>
            </div>
        </nav>
    )
}