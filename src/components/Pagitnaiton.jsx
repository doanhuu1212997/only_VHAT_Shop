import { useRouteMatch } from "react-router"
import { Link } from "react-router-dom"

export default function Pagination({ totalPage, count, currentPage, nextPage, previousPage }) {
    let match=useRouteMatch()
    
    function rednderPage() {

        let start =currentPage
        if(start <1) start =1
        let end =start +5
        if(end > totalPage) {
            end=totalPage
            start=end - 5 
        }
        let list=[]
        for(let i =start ; i<= end ;i++){
            list.push(<li class={`page-item ${currentPage === i ? 'active' : "" }` }>
            <Link class="page-link" to={`${match.path}?page=${i}`}>{i}</Link>
          </li>)
        }
        console.log()
        return list
    }
    return (
        <nav className="d-flex justify-content-center justify-content-md-end">
            <ul className="pagination pagination-sm text-gray-400">
                {
                    currentPage > 1 && (<li className="page-item">
                        <Link className="page-link page-link-arrow" to={`${match.path}?page=${currentPage-1}`}>
                            <i className="fa fa-caret-left" />
                        </Link>
                    </li>)
                }
                {
                    rednderPage()
                }

                {
                    currentPage < totalPage && (<li className="page-item">
                        <Link className="page-link page-link-arrow"to={`${match.path}?page=${currentPage+1}`}>
                            <i className="fa fa-caret-right" />
                        </Link>
                    </li>)
                }
            </ul>
        </nav>
    )
}