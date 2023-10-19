const SignupPage = () => {
	return (
		<div>
			<h1>Sign up</h1>
			<div>
				<label htmlFor="username">Username</label>
				<input type="text" name="username" />
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input type="password" name="password" />
			</div>
			<div>
				<button>Submit</button>
			</div>
			<div>
				<button>Signup with google</button>
			</div>
		</div>
	)
}

export default SignupPage;