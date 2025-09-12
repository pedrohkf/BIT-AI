import axios from "axios";

type IA = {
    _id: string;
    name: string;
    description: string;
    prompt: string;
}

export default async function Fetch() {
    const response = await axios.get(`https://bit-ai-back.vercel.app/ia`);

    const data = await response.data as IA[];

    return (
        <div>
            {data.map(produto =>
                <li key={produto._id}>
                    <p>{produto.name}</p>
                    <p>{produto.prompt}</p>
                </li>)}
        </div>
    )
}