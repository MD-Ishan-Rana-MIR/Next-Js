import { user } from "../data";


export async function GET(request: Request, { params }: { params: { id: string } }) {
    const {id} = params;
    const data = user.filter((item)=>{
        return item.id===parseInt(id)
    });
    
    return Response.json({
        data : data,
        status:"success"
    })
}