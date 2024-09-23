type Props = {
    img: string,
    title: string,
    amount: number,
    btnText: string
}

export default function TopUp({
    img,
    title,
    amount,
    btnText
}: Props) {

    return (
        <div className="card bg-base-100 w-40 shadow-xl">
            <figure className="h-20">
            <img
                className="m"
                src={img}
                alt="Shoes" />
            </figure>
            <div className="card-body px-2 py-2">
            <h2 className="text-md text-slate-600">{title}</h2>
            <div className="flex flex-row justify-between">
                <div className="text-slate-600">P-{amount}</div>
                <button className="btn btn-sm btn-primary">{btnText}</button>
            </div>
            </div>
        </div>
    )
}