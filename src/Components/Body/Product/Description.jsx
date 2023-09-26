import { useState } from 'react';
import propTypes from 'prop-types';

Descbook.propTypes = {
    children: propTypes.node,
};

function Descbook({ children }) {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <>
            <div className="bg-transparent mt-2">
                <p className="px-2">
                    {isReadMore ? text.slice(0, 500) : text}
                    <span
                        onClick={toggleReadMore}
                        className="text-tertiary cursor-pointer bg-transparent font-semibold"
                    >
                        {isReadMore ? '... Baca Selengkapnya' : ' Ringkas Deskripsi'}
                    </span>
                </p>
            </div>
        </>
    );
}

function Description() {
    return (
        <div className="bg-white text-justify">
            <h2 className="bg-white">
                <Descbook>
                    Komik Strobe Edge 10 merupakan komik terakhir dari seri komik ini. Komik ini begenre romansa,
                    percintaan masa remaja yang lucu. Komik ini menceritakan kisah cinta segitiga antara Ninako, Ren,
                    dan Andou. Alur yang menarik dan lucu membuat komik ini menjadi perhatian bagi pembaca. Sinopsis
                    Buku Apa itu cinta? Teman-teman Ninako Kinoshita mengatakan itu satu hal, tetapi Ninako
                    bertanya-tanya apa sebenarnya perasaan misterius ini. Ketika dia bertemu Ren Ichinose, pria tampan
                    dan penuh teka-teki yang dipuja semua gadis, hidupnya berubah secara tak terduga. Hanya dengan
                    beberapa kata dan senyuman, dia mengubah dunianya… Ninako tahu dirinya menyukai Ren. Namun, dia
                    tidak bisa menerima pernyataan cinta Ren setelah melihat Andou terluka karena berusaha melindunginya
                    dalam sebuah perkelahian. Tetapi alasan Ninako yang sebenarnya bukan karena itu. Andou pun berusaha
                    melakukan sesuatu pada Ninako yang sedang bingung. Lalu, apakah Ninako akhirnya menyadari
                    perasaannya yang sesungguhnya? Komik ini bergenre percintaan masa remaja yang lucu dengan karakter
                    yang digambar dengan indah dan momen-momen yang mendebarkan. Komik ini jelas untuk audiens remaja
                    yang lebih muda berdasarkan kecepatan yang lebih lambat, tetapi tetap sederhana dan mudah dibaca.
                    Daripada penasaran akan kelanjutan cerita dari kisah cinta segitiga ini. Ayo simak dan baca komik
                    ini dan temukan cerita menggemaskan dan penuh cinta lainnya di komik Strobe Edge 10!
                </Descbook>
            </h2>
        </div>
    );
}

export default Description;
