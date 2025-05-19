import { user } from "../data";


export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const data = user.filter((item) => {
        return item.id === parseInt(id)
    });

    return Response.json({
        data: data,
        status: "success"
    })
}


export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    console.log(id);

    const data = await request.json();
    console.log(data);

    const index = user.findIndex(item => item.id === parseInt(id));

    if (index === -1) {
        return new Response(JSON.stringify({ message: "User not found" }), {
            status: 404,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    user[index] = { ...user[index], ...data };

    return Response.json(user[index]);
}



export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const index = user.findIndex(item => item.id === parseInt(id));

    if (index === -1) {
        return new Response(JSON.stringify({ message: "User not found" }), {
            status: 404,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    const deletedUser = user[index];
    user.splice(index, 1);

    return new Response(JSON.stringify({
        message: "User deleted successfully",
        deletedUser
    }), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}
