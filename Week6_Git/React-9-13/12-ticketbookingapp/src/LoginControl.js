import React from 'react';

function LoginButton({ onLogin }) {
  return <button onClick={onLogin}>Login</button>;
}

function LogoutButton({ onLogout }) {
  return <button onClick={onLogout}>Logout</button>;
}

// The Login and Logout buttons accordingly display the different pages
function LoginControl({ isLoggedIn, onLogin, onLogout }) {
  return isLoggedIn ? (
    <LogoutButton onLogout={onLogout} />
  ) : (
    <LoginButton onLogin={onLogin} />
  );
}

export default LoginControl;
