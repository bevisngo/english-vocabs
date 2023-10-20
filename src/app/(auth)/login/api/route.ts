import db from "@/server/db";


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

export async function POST(request: Request) {
	console.log(request);
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