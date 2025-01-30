import Button from '@/components/atoms/Button';
import InputForm from '@/components/molecules/InputForm';
import { login } from '@/services/auth';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Login = () => {
  const [errorLogin, setErrorLogin] = useState('');
  const router = useRouter();
  async function handleLogin(event) {
    event.preventDefault();

    const payload = {
      username: event.target.username.value, //johnd
      password: event.target.password.value, // m38rmF$
    };

    try {
      const res = await login(payload);
      console.log(res);

      if (res.status) {
        localStorage.setItem('token', res.token);
        // window.location.href = '/products';
        router.push('/products');
      } else {
        console.log('Login error : ', res.error.response.data);
        setErrorLogin(res.error.response.data);
      }
    } catch (error) {
      console.log('Login failed : ', error);
      setErrorLogin(res.error.response.data);
    }
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
      {errorLogin && <p className='mt-4 text-center text-sm text-red-500'>{errorLogin}</p>}
    </form>
  );
};

export default Login;
