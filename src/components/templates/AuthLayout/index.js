import Link from 'next/link';
import React from 'react';

const AuthLayout = ({ title, desc, children, type = 'register' }) => {
  return (
    <>
      <div className="rounded-lg bg-gradient-aigen p-1 shadow-xl">
        <div className="w-full max-w-xs border rounded-lg p-8 bg-white">
          <h1 className="text-3xl font-bold mb-2 text-blue-500">{title}</h1>
          <p className="font-medium text-slate-500 mb-4">{desc}</p>
          {children}
          <p className="text-sm text-center mt-2">
            Dont have an account?{' '}
            <Link
              className="text-blue-500 hover:text-blue-700"
              href="/register"
            >
              Register Here
            </Link>
          </p>
          {/* {Cara 1} */}
          {type == 'register' ? (
            <p className="text-sm text-center mt-2 text-red-500">
              Already have an account?{' '}
              <Link className="text-blue-500 hover:text-blue-700" href="/login">
                Register
              </Link>
            </p>
          ) : (
            <p className="text-sm text-center mt-2">
              Already have an account?{' '}
              <Link className="text-blue-500 hover:text-blue-700" href="/login">
                Login Here
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
