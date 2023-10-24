"use client";
import Link from "next/link";
import "./style.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { LOCAL_TOKEN_KEY } from "@/src/constant/storage";
import { logginAPI } from "@/src/network/client/auth";

interface Data {
	username: string;
	password: string;
}

const initData = {
	username: "",
	password: "",
};

const LoginPage = () => {
	const [data, setData] = useState(initData);
	const router = useRouter();

	const handleChange = (field: keyof Data, value: string) => {
		setData({ ...data, [field]: value });
	};

	const handleSubmit = () => {
		if (typeof window !== "undefined") {
			logginAPI(data)
				.then((response: any) => {
					const { data, token } = response;
					if (data && token && localStorage) {
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
				<h1>Login</h1>
				<div>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						value={data.username}
						onChange={(e) =>
							handleChange("username", e.target.value)
						}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={data.password}
						onChange={(e) =>
							handleChange("password", e.target.value)
						}
					/>
				</div>
				<div>
					<button onClick={handleSubmit}>Login</button>
				</div>
				<p>
					{"Don't have an account yet? "}
					<Link href="/sign-up">Sign up</Link>
				</p>
			</div>
		</div>
	);
};

export default LoginPage;
