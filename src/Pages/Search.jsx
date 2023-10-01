import { useSearchParams } from 'react-router-dom';
import Layout from '../Fragments/Layout';
import useTitle from '../Utils/Hooks/useTitle';
import FilteringNav from '../Fragments/Filtering-Nav';
import { books } from '../../public/books/books';
import BookCard from '../Components/Body/Home/Book-Card';
import FilteringFormsSide from '../Components/Body/Filtering/Filtering-Forms-Side';
function Search() {
    useTitle('Cari Buku');
    const [newQuery] = useSearchParams();
    let search = newQuery.get('search');
    return (
        <>
            <div>{search}</div>
            <>
                <Layout search_query={search}>
                    <div className="container mx-auto lg:flex gap-2 relative">
                        <FilteringFormsSide />

                        <div>
                            <div className="container mx-auto px-2 mt-36 lg:mt-20 flex flex-col md:flex-row md:justify-around gap-6 md:gap-4">
                                <FilteringNav />
                            </div>

                            <div className="py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-8 sm:px-3 justify-center">
                                {books.map((book) => (
                                    <BookCard key={book.id} image={book.image} alt="Book" />
                                ))}
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        </>
    );
}

export default Search;
