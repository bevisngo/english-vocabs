import db from "@/server/db";

export async function GET(request: Request) {
	try {
		const users = await db.user.findMany();
		console.log(users);
		return Response.json({
			users,
		});
	} catch (error) {
		return Response.json({
			error,
		});
	}
}

export async function POST(request: Request) {
	try {
		// const users = await db.user.findMany();
		// console.log(users);
		const data = await request.json();
		const user = await db.user.create({ data });

		return Response.json({
			user,
		});
	} catch (error) {
		console.log(error);
		return Response.json({
			error,
		});
	}
}
