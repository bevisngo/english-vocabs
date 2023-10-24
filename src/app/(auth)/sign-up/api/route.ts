import db from "@/server/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "@/src/config/key";
import SignUpFormatedResponse from "./format";
import { signupSchema } from "./dto";
import { z } from "zod";

export async function POST(request: Request) {
	try {
		const payload = await request.json();
		const data = signupSchema.parse(payload);

		const existsUsername = await db.user.findFirst({
			where: {
				username: data.username,
			}
		});

		if(existsUsername) {
			throw new z.ZodError([
				{
					code: "custom",
					message: "Username has already existsed!",
					path: [],
				}
			]);
		}

		data.password = await bcrypt.hash(data.password, 10);
		const user = await db.user.create({ data });
		const token = jwt.sign({ id: user.id }, SECRET_KEY!);
		const response = new SignUpFormatedResponse(user, token);
		return Response.json(response.getInstance());
	} catch (error) {
		console.log(error);
		return Response.json({
			error,
			key: SECRET_KEY,
		});
	}
}
