import { useEffect } from 'react';
import propTypes from 'prop-types';

function useTitle(title) {
    useEffect(() => {
        document.title = `BukuKita - ${title}`;
    }, [title]);
}

useTitle.propTypes = {
    title: propTypes.string.isRequired,
};
export default useTitle;
