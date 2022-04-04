import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar=()=> {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <NavLink to="/" className="nav-link active" aria-current="page" href="#">Főoldal</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/statistic" className="nav-link" href="#">Statisztika</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/filter" className="nav-link" href="#">Szűrés megyék szerint</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}