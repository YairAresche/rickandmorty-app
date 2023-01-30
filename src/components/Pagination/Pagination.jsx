import { MdNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

import './Pagination.css'

const Pagination = ({page, setPage, maxPage}) => {

    const handleNext = () => {
        if(page < maxPage){
            setPage(page + 1)
        }
    }
    const handlePrev = () => {
        if(page > 1) {
            setPage(page - 1)
        }
    }

    return (
        <div className="button-page">
            <MdNavigateBefore className="btn-navigate" onClick={handlePrev} />
            <span className="">{page}</span>
            <MdOutlineNavigateNext className="btn-navigate" onClick={handleNext} />
        </div>
    )
}

export default Pagination