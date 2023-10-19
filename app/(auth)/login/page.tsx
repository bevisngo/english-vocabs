const LoginPage = () => {
	return (
		<div>
			<h1>Login</h1>
			<div>
				<label htmlFor="username">Username</label>
				<input type="text" name="username" />
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input type="password" name="password" />
			</div>
			<div>
				<button>Login</button>
			</div>
		</div>
	)
}

export default LoginPage;