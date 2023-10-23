import db from "@/server/db";
import bcrypt from "bcrypt";
import { z } from 'zod'

export async function GET(request: Request) {
	try {
		const users = await db.user.findMany();
		return Response.json({
			users,
		});
	} catch (error) {
		return Response.json({
			error,
		});
	}
}

const schema = z.object({
	username: z.string().min(5),
	firstname: z.string().min(2),
	lastname: z.string().min(2),
	password: z.string(),
});

export async function POST(request: Request) {
	try {
		const payload = await request.json();
		const data = schema.parse(payload);
		data.password = await bcrypt.hash(data.password, 10);
		const user = await db.user.create({ data });

		return Response.json({
			user,
		});
	} catch (error) {
		return Response.json({
			error,
		});
	}
}
