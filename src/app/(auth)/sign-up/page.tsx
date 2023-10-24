"use client";
import Link from "next/link";
import "./style.scss";
import { useState } from "react";
import axios from "axios";
import { LOCAL_TOKEN_KEY } from "@/src/constant/storage";
import { useRouter } from "next/navigation";
import { signupAPI } from "@/src/network/client/auth";

interface User {
	username: string;
	password: string;
	firstname: string;
	lastname: string;
	avatar?: string;
}

const initData = {
	username: "",
	password: "",
	firstname: "",
	lastname: "",
};

const SignupPage = () => {
	const [data, setData] = useState(initData);
	const router = useRouter();

	const handleChange = (field: keyof User, value: string) => {
		setData({ ...data, [field]: value });
	};

	const handleSubmit = () => {
		console.log("window", window);
		if (typeof window !== "undefined") {
			signupAPI(data)
			.then((response: any) => {
				const {
					data: { data, token },
				} = response;
				if (data && token) {
					localStorage.setItem(LOCAL_TOKEN_KEY, token);
					router.push("/home");
				}
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	};
	return (
		<div className="SignupContainer">
			<div className="SignupWrapper">
				<h1>Sign up</h1>
				<div>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						onChange={(e) =>
							handleChange("username", e.target.value)
						}
					/>
				</div>
				<div>
					<label htmlFor="firstname">First name</label>
					<input
						type="text"
						name="firstname"
						onChange={(e) =>
							handleChange("firstname", e.target.value)
						}
					/>
				</div>
				<div>
					<label htmlFor="lastname">Last name</label>
					<input
						type="text"
						name="lastname"
						onChange={(e) =>
							handleChange("lastname", e.target.value)
						}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						onChange={(e) =>
							handleChange("password", e.target.value)
						}
					/>
				</div>
				<div>
					<button onClick={handleSubmit}>Submit</button>
				</div>
				{/* <div>
					<button>Signup with google</button>
				</div> */}

				<p>
					Already have an account? <Link href="/login">Log in</Link>
				</p>
			</div>
		</div>
	);
};

export default SignupPage;
