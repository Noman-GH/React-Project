import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function AddNewTodo() {
  return (
    <div className="container mt-5 col-md-6 offset-md-3">
      <Formik
        initialValues={{ newtodo: "" }}
        onSubmit={async (values, e) => {
          if (values.newtodo != null) {
            fetch("https://dummyjson.com/todos/add", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                todo: values.newtodo,
                completed: false,
                userId: 5,
              }),
            })
              .then((res) => res.json())
              .then(console.log);
          }
          e.setSubmitting(false);
        }}
      >
        {(formik) => (
          <Form>
            <div className="mb-3 input-group mb-3">
              <Field
                type="text"
                className="form-control"
                name="newtodo"
                placeholder="Add new to do"
              />

              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddNewTodo;
