import React from 'react';
import '../style/login-register.css';
import LoginRegisterImage from '../../constants/images/login-register.png';
import SecondHandLogo from '../../constants/icons/secondHandLogo';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { LoginScheme } from '../../constants/schema/yupSchema';
import { useAuth } from '../../contexts/AuthContext';
//import { toast } from 'react-toastify';

function Login() {
  const { changeEmail, changePassword, submitLogin } = useAuth();

  /* const showToast = a => {
    toast.success(a.name, {
      position: 'top-right',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }; */

  return (
    <div className='login-container'>
      <img src={LoginRegisterImage} className='login-register-image' />

      <div className='login-area'>
        <div className='logo'>
          <SecondHandLogo />
        </div>

        <div className='login-area-container'>
          <p className='sign-in-title'>Giriş Yap</p>
          <p className='sign-in-subtitle'>Fırsatlardan yararlanmak için giriş yap!</p>

          <Formik initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginScheme}
          >
            {
              ({ handleSubmit }) =>
                <>
                  <form className='sign-in-form' onSubmit={submitLogin}>
                    <div onSubmit={handleSubmit}>
                      <div className='sign-in-email-container'>
                        <div className='input-name'>Email</div>
                        <input type="email" placeholder='Email@example.com' required id='email' className='input-box' onChange={e => changeEmail(e.target.value)} />
                      </div>
                      <div className='sign-in-password-container'>
                        <div className='input-name'>Şifre</div>
                        <input type="password" placeholder='Şifreni gir' required id='password' className='input-box' onChange={e => changePassword(e.target.value)} />
                      </div>
                    </div>
                    <p className='forgot-password'>Şifremi Unuttum</p>
                    <button className='login-button'>Giriş</button>
                    <p className='dont-have-account'>Hesabın yok mu?
                      <Link to="/register">
                        <span className='register-router-button'> Üye Ol</span>
                      </Link>
                    </p>
                  </form></>
            }
          </Formik>

        </div>

      </div>

    </div>
  );
}

export default Login;