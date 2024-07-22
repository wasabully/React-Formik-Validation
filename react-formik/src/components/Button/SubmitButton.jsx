import './SubmitButton.css';

export const SubmitButton = ({ children }) => {
	return (
		<button type='submit' className='button'>
			{children}
		</button>
	);
};
