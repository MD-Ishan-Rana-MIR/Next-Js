import { Metadata } from 'next'
import React from 'react'

// type Props = {
//     params: Promise<{ id: string }>
//     searchParams: Promise<{ [key: string]: string | string[] | undefined }>
// }


// export async function generateMetadata(
//     { params }: Props
// ): Promise<Metadata> {
//     const id = (await params).id



//     return {
//         title: `blog post ${id}`,
//         description: ` This is blog post id ${id} `,
//     };
// }

const BlogDetaislPage = async ({ params }: { params: Props }) => {
    const { id } = await params;





    return (
        <div>BlogDetaislPage</div>
    )
}

export default BlogDetaislPage