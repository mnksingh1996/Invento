import React from "react";

function headerComponent() {
  return (
    <header className="header">
      <div className="container">
        <img src="/logo/logo.svg" alt="logo with text" />

        <input placeholder="Search something" />

        <div className="form__group">
          <button className="btn white">Sign In</button>

          <button className="btn green">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default headerComponent;
