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
            {/* <span className="btn-navigate" onClick={handlePrev}> <MdNavigateBefore /> </span> */}
            <MdNavigateBefore className="btn-navigate" onClick={handlePrev} />
            <span className="">{page}</span>
            <MdOutlineNavigateNext className="btn-navigate" onClick={handleNext} />
            {/* <span className="btn-navigate" onClick={handleNext}> <MdOutlineNavigateNext /> </span> */}
        </div>
    )
}

export default Pagination