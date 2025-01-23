import Button from '@/components/atoms/Button';
import InputForm from '@/components/molecules/InputForm';
import React from 'react';

const Login = () => {
  function handleLogin(event) {
    event.preventDefault();
    console.log('Klik button!');

    //simpan data form ke localStorage - browser.
    
    localStorage.setItem('username', event.target.username.value);
    localStorage.setItem('password', event.target.password.value);

    window.location.href = '/products';
  }
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="Masukkan Username"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Masukkan Password "
      />
      <Button
        buttonClassname="bg-gradient-hover text-white w-full mt-4"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};

export default Login;
