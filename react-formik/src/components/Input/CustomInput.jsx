import { ErrorMessage as Error, Field } from 'formik';
import './CustomInput.css';

export const CustomInput = ({ id, label, name, placeholder }) => {
	return (
		<div className='input-container'>
			<label htmlFor={id}>{label}</label>
			<Field name={name} id={id} placeholder={placeholder} />
			<Error name={name}>{error => <span>{error}</span>}</Error>
		</div>
	);
};
