import React from "react"

export default function Header({ user, signOut }) {
  return (
    <nav
      className="navbar bg-dark border-bottom border-bottom-dark mb-4"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          AWS Amplify
        </a>
        <div className="d-flex align-items-center align-content-center">
          <label className="text-white text-capitalize">
            Welcome, {user.username}
          </label>
          <button
            className="btn btn-md btn-outline-light m-2"
            onClick={signOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  )
}
