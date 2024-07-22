import { Form, Formik } from 'formik';
import { SubmitButton } from '../Button/SubmitButton';
import { CustomInput } from '../Input/CustomInput';
import './CustomForm.css';
import { initialFormValues, validationSchemas } from './formHelpers';

export const CustomForm = () => {
	return (
		<Formik
			initialValues={initialFormValues}
			validationSchema={validationSchemas.customForm}
			onSubmit={(values, { setSubmitting }) => {
				console.log('Form submitted successfully!', values);
				alert('Form submitted successfully!');
				setSubmitting(false);
			}}
		>
			<Form className='custom-form'>
				<CustomInput
					label='Имя'
					name='firstName'
					id='firstName'
					placeholder='Введите имя'
				/>
				<CustomInput
					label='Фамилия'
					name='lastName'
					id='lastName'
					placeholder='Введите фамилию'
				/>
				<CustomInput
					label='Электронная почта'
					name='email'
					id='email'
					placeholder='Введите email'
				/>
				<SubmitButton>Отправить</SubmitButton>
			</Form>
		</Formik>
	);
};
