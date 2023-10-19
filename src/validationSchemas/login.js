import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Debe ingresar un email válido')
        .required('E-mail es requerido'),
    password: yup
        .string()
        .min(5, 'Muy corto')
        .max(20, 'Muy extensa')
        .required('Contraseña requerida'),
}
)