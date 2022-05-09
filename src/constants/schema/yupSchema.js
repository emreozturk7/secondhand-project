import * as yup from 'yup';

export const RegisterScheme = yup.object().shape({
  email: yup
    .string()
    .email('Lütfen geçerli bir email adresi giriniz !')
    .required('E-posta alani zorunludur.'),
  password: yup
    .string()
    .typeError('Her karakteri kullanamazsiniz')
    .min(8, 'Şifreniz 8 karakterden az olamaz')
    .max(20, 'Şifreniz 20 karakterden fazla olamaz')
    .required('Şifre alani zorunludur'),
});

export const LoginScheme = yup.object().shape({
  email: yup
    .string()
    .email('Lütfen geçerli bir email adresi giriniz !')
    .required('E-posta alani zorunludur.'),
  password: yup
    .string()
    .typeError('Her karakteri kullanamazsiniz')
    .min(8, 'Şifreniz 8 karakterden az olamaz')
    .max(20, 'Şifreniz 20 karakterden fazla olamaz')
    .required('Şifre alani zorunludur'),
});

export const ProductScheme = yup.object().shape({
  
});