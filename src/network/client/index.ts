import { LOCAL_TOKEN_KEY } from "@/src/constant/storage";
import axios from "axios";

interface Header {
	[key: string]: string;
}

export class APIProvider {
	getInstance(isAuth: boolean, header?: Header) {
		const instance = axios.create({
			// timeout: 5000, // time out
			...(isAuth && {
				headers: {
					Authentication: localStorage.getItem(LOCAL_TOKEN_KEY),
				},
			}),
			...header,
		});

		instance.interceptors.response.use(
			(response) => {
				return response;
			},
			(error) => {
				console.error(error);
				alert("Somethings went wrong!");
			}
		);

		return instance;
	}
}

export const API = new APIProvider().getInstance(true);
