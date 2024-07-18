import "../css/pagination.css";
function PaginationButtons({ page, setPage, total }) {
  return (
    <div className="pagination">
      <div>
        <button
          className="pageButton icon"
          disabled={page === 1 ? true : false}
          onClick={() => setPage(page - 1)}
        >
          <i className="fa-solid fa-less-than"></i>
        </button>
        <button className="pageButton pageText">{page}</button>
        <button
          className="pageButton icon"
          disabled={page === total ? true : false}
          onClick={() => setPage(page + 1)}
        >
          <i className="fa-solid fa-greater-than"></i>
        </button>
      </div>
    </div>
  );
}

export default PaginationButtons;
