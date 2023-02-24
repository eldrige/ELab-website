import { object, string, mixed, array, addMethod } from 'yup';

const getFormSchema = () => {
    /* override the email method */
    addMethod(string, 'email', function validateEmail(message){
        return this.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, {
            message,
            name: 'email',
        });
    });

    return object({
        firstname: string().required('This field is required'),
        lastname: string().required('This field is required'),
        email: string().required('This field is required').email('Invalid email address'),
        subject: string().required('This field is required'),
        choices: array().of(string()).min(1, 'Please select one of these choices'),
        question: string().required('Please select one of these answers'),
        message: string().required('This field is required'),
    });
}

export const contactSchema = getFormSchema();