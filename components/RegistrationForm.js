import React from 'react';

class RegistrationForm extends React.Component {
	render() {
		return (
			<form>
				<input type="text" />
				<input type="password" />
				<button type="submit" value="Submit">Register</button>
			</form>
		);
	}
}

export default RegistrationForm;