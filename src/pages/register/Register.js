import React from 'react';
import '../style/login-register.css';
import LoginRegisterImage from '../../constants/images/login-register.png';
import SecondHandLogo from '../../constants/icons/secondHandLogo';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { RegisterScheme } from '../../constants/schema/yupSchema';
import { useAuth } from '../../contexts/AuthContext';

function Register() {
  const { changeEmail, changePassword, submitRegister } = useAuth();

  return (
    <div className='login-container'>
      <img src={LoginRegisterImage} className='login-register-image' />

      <div className='login-area'>
        <div className='logo'>
          <SecondHandLogo />
        </div>

        <div className='login-area-container'>
          <p className='sign-in-title'>Üye Ol</p>
          <p className='sign-in-subtitle'>Fırsatlardan yararlanmak için üye ol!</p>

          <Formik initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={RegisterScheme}
          >
            {
              ({ handleSubmit }) =>
                <form className='sign-in-form' onSubmit={submitRegister}>

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
                  <button className='login-button'>Üye Ol</button>
                  <p className='dont-have-account'>Hesabın var mı?
                    <Link to="/login">
                      <span className='register-router-button'> Giriş Yap</span>
                    </Link>
                  </p>
                </form>
            }
          </Formik>

        </div>

      </div>

    </div>
  );
}

export default Register;