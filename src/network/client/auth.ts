import { API } from ".";

interface LogginPayload {
	username: string;
	password: string;
}
export const logginAPI = (data: LogginPayload) =>
	new Promise((resolve, reject) => {
		API.post("/login/api", data)
			.then(response => resolve(response.data))
			.catch(error => reject(error));
	});

interface SignupPayload {
	username: string;
	password: string;
	firstname: string;
	lastname: string;
}
export const signupAPI = (data: SignupPayload) : Promise<any> =>
	new Promise((resolve, reject) => {
		API.post("sign-up/api", data)
			.then(response => resolve(response.data))
			.catch(error => reject(error));
	})