import { Link } from "react-router-dom"

type Props = {
    img: string,
    title: string,
    link?: string,
}

export default function PlayAppCard({
    img,
    title,
    link
}: Props) {

    return (
        <Link to={'/play-detail'}>
            <div className="card bg-base-100 w-40 shadow-xl">
                <figure className="h-20">
                <img
                    className="m"
                    src={img}
                    alt="Shoes" />
                </figure>
                <div className="card-body px-2 py-4">
                    <p className="text-xl text-center text-slate-600">{title}</p>
                </div>
            </div>
        </Link>
    )
}