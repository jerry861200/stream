import React from "react";
import { Form, Field } from "react-final-form";

class StreamForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label htmlFor="">{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

	formValidate = (formValues) =>{
		const errors = {};
		if (!formValues.title) {
			errors.title = "You must enter a title";
		}
		if (!formValues.description) {
			errors.description = "You must enter a description";
		}
		return errors;
	}

  render() {
    return (
      <Form
				onSubmit={this.onSubmit}
				validate={this.formValidate}
				initialValues={this.props.initialValues}
			>
        {({handleSubmit}) => (
          <form
            onSubmit={handleSubmit}
            className="ui form error"
          >
            <Field
              name="title"
              component={this.renderInput}
              label="Enter Title"
            />
            <Field
              name="description"
              component={this.renderInput}
              label="Enter Desciption"
            />
            <button className="ui button primary">Submit</button>
          </form>
        )}
      </Form>
    );
  }
}



export default StreamForm;
