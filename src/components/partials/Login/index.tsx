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
  CircularProgress,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import styled from 'styled-components';
import { Formik } from 'formik';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useAuthContext } from 'src/components/commons/Auth';

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 70vh;
  margin-top: 60px;
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
  const [loadingLoginResult, setLoadingLoginResult] = useState(false);

  return (
    <Box>
      <Container>
        <Paper elevation={4}>
          <Box py={5} px={3} width={500}>
            <Box display="flex" justifyContent="center" mb={1}>
              <img src="/sweets-logo.png" alt="logo" width="400" />
            </Box>
            <Box textAlign="center" fontWeight="fontWeightMedium" fontSize="h6.fontSize" mb={2.5} color="#5E6C84">
              あまはこコンテンツ管理アプリ
            </Box>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={async (values) => {
                setLoadingLoginResult(true);
                const succeeded = await login(values.email, values.password);
                if (!succeeded) {
                  setShowLoginErrorAlert(true);
                  setLoadingLoginResult(false);
                }
              }}
            >
              {({ values, handleChange, handleSubmit }) => (
                <Box display="flex" flexDirection="column" minWidth="20rem" height="400" clone>
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
                    <Box margin={1} minHeight={36} clone>
                      <Button variant="contained" color="primary" type="submit" disabled={loadingLoginResult}>
                        {!loadingLoginResult ? (
                          'ログイン'
                        ) : (
                          <Box position="absolute" top="50%" left="50%" marginTop={-1.5} marginLeft={-1.5}>
                            <CircularProgress size={24} />
                          </Box>
                        )}
                      </Button>
                    </Box>
                  </form>
                </Box>
              )}
            </Formik>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
