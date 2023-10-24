import db from "@/server/db";
import { LoginSchema } from "./dto";
import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "@/src/config/key";
import LogginFormatedResponse from "./format";

export async function GET(request: Request) {
	try {
		const users = await db.user.findMany();
		console.log(users);
		return Response.json({
			users
		});
	}catch (error) {
		return Response.json({
			error
		})
	}
}

const throwException = () => {
	throw new z.ZodError([
		{
			code: "custom",
			path: [],
			message: ""
		}
	]);
}

export async function POST(request: Request) {
	try {
		const payload = await request.json();
		const data = LoginSchema.parse(payload);
		const user = await db.user.findFirst({
			where: {
				username: data.username,
			}
		});
		if(user) {
			const result = await bcrypt.compare(data.password, user.password);
			if(result) {
				const token = jwt.sign({ id: user.id }, SECRET_KEY!);
				const response = new LogginFormatedResponse(user, token);
				return Response.json(response.getInstance());
			}
			throwException ();
		}
		else throwException();
	}catch (error) {
		return Response.json({
			error
		})
	}
}