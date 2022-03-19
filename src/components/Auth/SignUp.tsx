import { Formik, Form, Field } from "formik";
import { Box, IconButton, InputAdornment, Paper } from "@mui/material";
import { TextField } from "formik-mui";
import StyledAuthForm from "../styles/AuthForm.styled";
import Button from "../UI/Button";
import { useHistory } from "react-router-dom";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { register } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../store/auth-slice";
import { selectAuth, selectUi } from "../../store";
import { uiActions } from "../../store/ui-slice";

interface SignUpFormValues {
  email: string;
  password: string;
  password2: string;
}

interface ShowPassword {
  password: boolean;
  password2: boolean;
}

const SignUp: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loadingStatus } = useSelector(selectUi);
  const [showPassword, setShowPassword] = useState<ShowPassword>({
    password: false,
    password2: false,
  });

  useEffect(() => {
    if (loadingStatus === "success") {
      dispatch(uiActions.setLoadingStatus(""));
      history.push("/sign-in");
    }
  }, [loadingStatus, history]);

  const initialValues: SignUpFormValues = {
    email: "",
    password: "",
    password2: "",
  };

  const toggleAuthHandler = () => {
    history.push("/sign-in");
  };

  const clickShowPassword = () => {
    setShowPassword({ ...showPassword, password: !showPassword.password });
  };
  const clickShowPassword2 = () => {
    setShowPassword({ ...showPassword, password2: !showPassword.password2 });
  };

  return (
    <StyledAuthForm>
      <Paper>
        <h1>Sign Up</h1>
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors: Partial<SignUpFormValues> = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 6) {
              errors.password = "Must be 6 characters long";
            }
            if (!values.password2) {
              errors.password2 = "Required";
            } else if (values.password2.length < 6) {
              errors.password2 = "Must be 6 characters long";
            }
            if (values.password !== values.password2) {
              errors.password2 = "Password does not match";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(
              registerAction({ email: values.email, password: values.password })
            );

            // signUp(values.email, values.password);
            // setSubmitting(false);
            // setTimeout(() => {
            //   setSubmitting(false);
            //   alert(JSON.stringify(values, null, 2));
            // }, 500);
          }}
        >
          {({
            values,
            submitForm,
            resetForm,
            isSubmitting,
            touched,
            errors,
          }) => (
            <Form>
              <Box margin={1}>
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Enter Email"
                  helperText=" "
                  fullWidth
                />
              </Box>
              <Box margin={1}>
                <Field
                  component={TextField}
                  name="password"
                  type={showPassword.password ? "text" : "password"}
                  label="Password"
                  helperText=" "
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={clickShowPassword}
                          edge="end"
                        >
                          {showPassword.password ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Box margin={1}>
                <Field
                  component={TextField}
                  name="password2"
                  type={showPassword.password2 ? "text" : "password"}
                  label="Confirm Password"
                  helperText=" "
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={clickShowPassword2}
                          // onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword.password2 ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              {loadingStatus === "pending" && (
                <div className="centered">
                  <LoadingSpinner />
                </div>
              )}
              <Box margin={1}>
                <Button
                  className="action"
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  Register
                </Button>
              </Box>
              <div className="toggle" onClick={toggleAuthHandler}>
                Login with existing account
              </div>
              <pre>{isSubmitting}</pre>
            </Form>
          )}
        </Formik>
      </Paper>
    </StyledAuthForm>
  );
};

export default SignUp;
