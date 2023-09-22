import ReactPaginate from 'react-paginate';

interface PaginationProps {
    onChangePage: (page: number) => void;
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
    onChangePage,
    currentPage,
}) => {
    return (
        <div className="pagination">
            <ReactPaginate
                className="pagination__buttons"
                breakLabel="..."
                previousLabel="<"
                onPageChange={(event) => onChangePage(event.selected + 1)}
                pageRangeDisplayed={4}
                pageCount={4}
                nextLabel=">"
                forcePage={currentPage - 1}
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default Pagination;
