import db from "@/server/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "@/src/config/key";
import SignUpFormatedResponse from "./format";
import { signupSchema } from "./dto";

export async function POST(request: Request) {
	try {
		const payload = await request.json();
		const data = signupSchema.parse(payload);
		data.password = await bcrypt.hash(data.password, 10);
		const user = await db.user.create({ data });
		const token = jwt.sign({ id: user.id }, SECRET_KEY!);
		const response = new SignUpFormatedResponse(user, token);
		return Response.json(response.getInstance());
	} catch (error) {
		console.log(error);
		return Response.json({
			error,
		});
	}
}
