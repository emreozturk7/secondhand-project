/* eslint-disable indent */
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Layout({ children }) {
    const { isLogged } = useAuth();
    return (
        <>
            <div className="layout">
                {
                    isLogged == false
                        ?
                        <Link to={'/login'}>Giriş Yap</Link>
                        :
                        <>
                            <Link to={'/addproduct'}><span>Ürün Ekle</span></Link>
                            <Link to={'/myaccount'}><span>Hesabım</span></Link>
                        </>
                }
            </div>
            {children}
        </>
    );
}

export default Layout;