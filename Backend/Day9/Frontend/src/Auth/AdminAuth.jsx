import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const AdminAuth = () => {
    const Token = localStorage.getItem('Token') !== null;
    const Role =  localStorage.getItem('Role') === "ADMIN";

  return (
    Token && Role ? <Outlet /> : <Navigate to='/login' />
  )
}

export default AdminAuth
