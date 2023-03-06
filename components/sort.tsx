import { ImageData } from "@/data/images";

const Sort = (props: {
    setSortField: (sortField: keyof ImageData | null) => void;
 }) => {
    return (<div className="flex flex-row justify-between p-4">
        <button onClick={() => props.setSortField(null)}>Default Sort</button>
        <button onClick={() => props.setSortField("title")}>Sort by Title</button>
        <button onClick={() => props.setSortField("author")}>Sort by Author</button>
    </div>)
}

export default Sort