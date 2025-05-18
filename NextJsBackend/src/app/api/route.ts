export async function GET(request: Request) {
    return new Response("Home route", {
        status: 200,
        headers: {
            "Content-Type": "text/plain",
        },
    });
}
