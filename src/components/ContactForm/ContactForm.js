import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { func } from 'prop-types';
import { validateUsername, validateNumber } from 'utils';
import classes from './ContactForm.module.css';
import { addContact } from 'redux/contacts/operations';
import { selectAllContacts, selectLoading } from 'redux/contacts/selectors'
import { useDispatch, useSelector } from 'react-redux';

const ContactForm = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(selectAllContacts);
  const isLoading = useSelector(selectLoading);

    const handleFormSubmit = async ({ name, number }) => {
        if (contacts.find(contact => contact.name === name)) {
            alert(`${name} is already in contacts !!!`);
            return;
        }
        await dispatch(addContact({ name, number }));
    };

return (
    <Formik
        initialValues={{
            name: '',
            number: ''
        }}
        onSubmit={(values, {resetForm }) => {
            handleFormSubmit(values);
            resetForm();                
        }}
    >
        {(props) => (
            <Form className={classes.form}>
                <Field
                    className={classes.input}
                    type="text"
                    name="name"
                    placeholder="John"
                    validate={validateUsername}
                    required
                />
                <ErrorMessage name="name" component="p" className={classes.error}/>
                <Field
                    className={classes.input}
                    name="number"
                    placeholder="+380..."
                    validate={validateNumber}
                    required
            
                />
                <ErrorMessage name="number" component="p" className={classes.error} />
                <button
                    className={classes.btn}
                    type="submit"
                >
                    { isLoading ?
                        <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" >
                            <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                            <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
                            </path>
                        </svg> : 'Submit'
                    }
                </button>
            </Form>
        )}
    </Formik>
)

}
ContactForm.propsTypes = {
    onSubmit: func.isRequired
}
export default ContactForm;