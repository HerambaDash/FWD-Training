import "../css/pagination.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function PaginationButtons({ page, setPage, total }) {
  const params = useParams();
  useEffect(() => {
    setPage(Number(params.pgNo));
  }, []);

  return (
    <div className="pagination">
      <div>
        <button
          className="pageButton icon"
          disabled={page === 1 ? true : (page > total || page < 1) ? true : false}
          onClick={() => setPage(page - 1)}
        >
          <i className="fa-solid fa-less-than"></i>
        </button>
        <button className="pageButton pageText">{page}</button>
        <button
          className="pageButton icon"
          disabled={page === total ? true : (page > total || page < 1) ? true : false}
          onClick={() => setPage(page + 1)}
        >
          <i className="fa-solid fa-greater-than"></i>
        </button>
      </div>
    </div>
  );
}

export default PaginationButtons;
