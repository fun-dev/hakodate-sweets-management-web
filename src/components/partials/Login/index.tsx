import React, { useState } from 'react';
import {
  Paper,
  Box,
  Button,
  FormControl as MaterialFormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import styled from 'styled-components';
import { Formik } from 'formik';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useAuthContext } from 'src/components/commons/Auth';

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const FormControl = styled(MaterialFormControl)`
  margin: ${({ theme }) => theme.spacing(1)}px;
`;

export const Login: React.FC = () => {
  const { login } = useAuthContext();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const handleVisiblePassword = () => {
    setVisiblePassword((visible) => !visible);
  };
  const [showLoginErrorAlert, setShowLoginErrorAlert] = useState(false);
  const [disabledLoginButton, setDisabledLoginButton] = useState(false);

  return (
    <Container>
      <Box height="max-content" width="max-content" padding={3} clone>
        <Paper>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={async (values) => {
              setDisabledLoginButton(true);
              const succeeded = await login(values.email, values.password);
              if (!succeeded) {
                setShowLoginErrorAlert(true);
              }
              setDisabledLoginButton(false);
            }}
          >
            {({ values, handleChange, handleSubmit }) => (
              <Box display="flex" flexDirection="column" minWidth="20rem" clone>
                <form onSubmit={handleSubmit}>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="email">メールアドレス</InputLabel>
                    <OutlinedInput
                      id="email"
                      name="email"
                      type="text"
                      value={values.email}
                      onChange={handleChange}
                      labelWidth={110}
                    />
                  </FormControl>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="password">パスワード</InputLabel>
                    <OutlinedInput
                      id="password"
                      name="password"
                      type={visiblePassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton onClick={handleVisiblePassword} edge="end">
                            {visiblePassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={80}
                    />
                  </FormControl>
                  {showLoginErrorAlert && (
                    <Box margin={1} clone>
                      <Alert severity="error">メールアドレスまたはパスワードが正しくありません。</Alert>
                    </Box>
                  )}
                  <Box margin={1} clone>
                    <Button variant="contained" color="primary" type="submit" disabled={disabledLoginButton}>
                      ログイン
                    </Button>
                  </Box>
                </form>
              </Box>
            )}
          </Formik>
        </Paper>
      </Box>
    </Container>
  );
};
