import { type NextRequest } from "next/server";
import { user } from "./data";

// export async function GET() {
//     return Response.json(user)
// }


// export async function POST(request: Request) {
//     const userData = await request.json();
//     const userPostData = {
//         id: user.length + 1,
//         ...userData
//     }
//     user.push(userData);
//     return new Response(JSON.stringify(userPostData), {
//         headers: {
//             "Content-Type": "application/json"
//         },
//         status: 201
//     })
// }


export async function POST (request:Request){
    const data = await request.json();
    const userData = {
        id : user.length+1,
        ...data
    };
    user.push(userData);
    return new Response(JSON.stringify(userData),{
        headers : {
            "Content-Type" : "application/json"
        },
        status : 201
    })
}

export async function GET (request: NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filterData = query ? user.filter(item=>item.name.includes(query)) : user;
    return Response.json(filterData);
    console.log(query)
}