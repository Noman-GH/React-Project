import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Navigate } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState({ error: "", loggedInn: false });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card my-5">
              <div className="text-center card-header">
                <h3>Login</h3>
              </div>
              <div className="card-body cardbody-color p-lg-5">
                <Formik
                  initialValues={{ email: "", password: "" }}
                  onSubmit={(values, e) => {
                    if (
                      values.email === "contact.abunoman@gmail.com" &&
                      values.password === "12345678"
                    ) {
                      setLogin({ ...login, loggedInn: true });
                    } else {
                      setLogin({
                        ...login,
                        error: "Invalid credintials",
                      });
                    }
                    e.setSubmitting(false);
                  }}
                >
                  {(formik) => (
                    <Form>
                      <div className="mb-3">
                        {login.loggedInn && (
                          <Navigate to="/counters" replace={true} />
                        )}

                        <Field
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          name="email"
                        />
                      </div>
                      <div className="mb-3">
                        <Field
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          name="password"
                        />
                      </div>

                      {login.error && (
                        <div className="alert alert-danger" role="alert">
                          {login.error}
                        </div>
                      )}

                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
