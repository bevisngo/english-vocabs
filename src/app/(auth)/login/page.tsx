import Link from "next/link";
import "./style.scss";

const LoginPage = () => {
	return (
		<div className="SignupContainer">
			<div className="SignupWrapper">
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
			<p>
				Don't have an account yet? 
				<Link href="/sign-up">Sign up</Link>
			</p>
		</div>
		</div>
	)
}

export default LoginPage;