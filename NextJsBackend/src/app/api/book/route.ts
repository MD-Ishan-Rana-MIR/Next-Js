import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request:NextRequest){
    // const requestHeaders = new Headers(request.headers);
    // console.log(`request headers is ${requestHeaders.get("Accept-Language")}`)
    const headersList = await headers();
    const refer = headersList.get("Authorization") as string
    return new Response("<h1>Ai server is running</h1>",{
        status : 200,
        headers : {
            token:refer,
            "Content-type" : "text/html"
        }
    })
}