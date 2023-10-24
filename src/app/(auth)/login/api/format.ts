import { User } from "@/prisma/generated/client";

class LogginFormatedResponse {
	data : any;
	token: string;
	constructor(user: User, token: string) {
		this.data = user;
		delete this.data.password;
		this.token = token;
	}

	getInstance() {
		return {
			data: this.data,
			token: this.token,
		}
	}
}

export default LogginFormatedResponse;