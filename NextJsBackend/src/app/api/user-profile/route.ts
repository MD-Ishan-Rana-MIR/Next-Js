import { cookies } from 'next/headers'


export async function GET(request: Request) {
    // const cookieStore = await cookies() 
    const cookieStore = await cookies();
    const token = cookieStore.get("token")
    // const token = cookieStore.get('token')
    console.log(token?.value)

    return new Response('Hello, Next.js!', {
        status: 200,
        headers: { 'Set-Cookie': `token=Amartoken` },
    })
}