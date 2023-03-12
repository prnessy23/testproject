import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
// import { useMutation, useQuery } from '@apollo/client';
// import { QUERY_TECH } from '../utils/queries';
// import { CREATE_MATCHUP } from '../utils/mutations';

export default function Home() {
  function showModal() {
    //style = show
  }
  function hideModal() {
    //style = hide
  }
  function openRegisterModal() {
    //open login modal
    showModal()
  }
  function openLoginModal() {
    //open newuser modal
    showModal()
  }
  function logIn() {
    //mutation to create new login session
  }
  function switchToRegister() {
    //hide login modal and show new user modal
    hideModal()
    showModal()
  }
  function register() {
    //mutation to create newuser
  }
  function switchToLogin() {
    //hide new user modal and show login modal
    hideModal()
    showModal()
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li class="right">
            <button onClick={openRegisterModal} id="register-btn">
              Register
            </button>
          </li>
          <li class="right">
            <button onClick={openLoginModal} id="login-btn">
              Login
            </button>
          </li>
        </ul>
      </nav>

      <div id="register-modal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2>Register</h2>
          <form>
            <div>
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div>
              <button onClick={register} type="submit">
                Submit
              </button>
            </div>
            <button onClick={switchToLogin} type="submit">
              Have an account?Login here
            </button>
          </form>
        </div>
      </div>

      <div id="login-modal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2>Login</h2>
          <form>
            <div>
              <label for="username">UserName:</label>
              <input type="text" id="username" name="username" required />
            </div>

            <div>
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div>
              <button onClick={logIn} type="submit">
                Submit
              </button>
            </div>
            <button onClick={switchToRegister} type="submit">
              {" "}
              New User? Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
