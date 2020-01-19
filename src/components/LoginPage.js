import React from 'react';
import { connect } from 'react-redux';
// import { startLogin } from '../redux/actions/auth';

export const LoginPage = ({ startLogin }) => (
	<div className="box-layout">
		<div className="box-layout__box">
			<h1 className="box-layout__title">Expensify App</h1>
			<p>It's time to get your expenses under control.</p>
			<button className="button" onClick={startLogin}>
				Login
			</button>
		</div>
	</div>
);

export default LoginPage;
