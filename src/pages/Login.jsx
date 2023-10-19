import { useState } from 'react';
import { Formik, useField } from "formik";
import { Button, StyleSheet, View } from "react-native";
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyledText";
import { useEffect } from 'react';
import { loginValidationSchema } from '../validationSchemas/login';

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 12,
        marginLeft: 10,
        marginBottom: 20,
        marginTop: -5
    },
    form: {
        margin: 12
    },
    successMessage: {
        color: 'green',
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center'
    }
})

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)
    return (
        <>
            <StyledTextInput
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>
                {meta.error}
            </StyledText>}
        </>
    )
}

const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Email requerido'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9·-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email no válido'
    }
    return errors
}

export default function LoginPage() {
    const [success, setSuccess] = useState(false)

    return (
        <Formik
            validationSchema={loginValidationSchema}
            initialValues={initialValues}
            onSubmit={(values) => {
                // values != null ? setSuccess(true) : setSuccess(false)
                setSuccess(true)
                return console.log(values)
            }}
        >
            {
                ({ handleSubmit, isSubmitting }) => {
                    return (
                        <View style={styles.form}>
                            <FormikInputValue
                                name='email'
                                placeholder="E-mail"
                            />
                            <FormikInputValue
                                name='password'
                                placeholder="Contraseña"
                                secureTextEntry
                            />
                            <Button
                                onPress={handleSubmit}
                                title={isSubmitting ? "Sign Out" : "Log In"}
                            />
                            {success && <StyledText style={styles.successMessage}>Login exitoso!</StyledText>}
                        </View>
                    )
                }
            }
        </Formik>
    )
}