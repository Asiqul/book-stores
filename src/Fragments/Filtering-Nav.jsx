import FilteringBar from '../Components/Body/Filtering/Filtering-Bar';
import FilteringButton from '../Components/Body/Filtering/Filtering-Button';

function FilteringNav() {
    return (
        <>
            <div className="container mx-auto px-2 flex flex-col gap-2">
                <FilteringButton />
                <FilteringBar />
            </div>
        </>
    );
}

export default FilteringNav;
