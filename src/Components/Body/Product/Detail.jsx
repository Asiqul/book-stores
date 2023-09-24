function Detail() {
    return (
        <>
            <div className="flex flex-row my-3 bg-transparent">
                <ul className="flex flex-col gap-5 w-1/2">
                    <li className="grid grid-cols-1 bg-transparent">
                        <span className="text-heading font-semibold text-sm text-border">Jumlah Halaman</span>
                        <span>300</span>
                    </li>
                    <li className="grid grid-cols-1 bg-transparent">
                        <span className="text-heading font-semibold text-sm text-border">Tahun Terbit</span>
                        <span>2015</span>
                    </li>
                    <li className="grid grid-cols-1 bg-transparent">
                        <span className="text-heading font-semibold text-sm text-border">Bahasa</span>
                        <span>Indonesia</span>
                    </li>
                </ul>
                <ul className="flex flex-col gap-5 w-1/2">
                    <li className="grid grid-cols-1 bg-transparent">
                        <span className="text-heading font-semibold text-sm text-border">Penerbit</span>
                        <span>Inc. Labs</span>
                    </li>
                    <li className="grid grid-cols-1 bg-transparent">
                        <span className="text-heading font-semibold text-sm text-border">Berat</span>
                        <span>0.89 kg</span>
                    </li>
                    <li className="grid grid-cols-1 bg-transparent">
                        <span className="text-heading font-semibold text-sm text-border">Rating</span>
                        <span>4.5</span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Detail;
