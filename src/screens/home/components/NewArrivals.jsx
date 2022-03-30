import React,{ useState } from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

function NewArrivals() {
  const AllProducts = useSelector(state => state.fetchReducer.data);
  //pagination
  const [currentPage,setCurrentPage] = useState(1);
  const productPerPage = 5;
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = AllProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate =(number) => setCurrentPage(number)
  return (
    <div>
           <div className="container new-arrivals">
        <div className="heading heading-flex mb-3">
          <div className="heading-left">
            <h2 className="title">New Arrivals</h2>{/* End .title */}
          </div>{/* End .heading-left */}
          <div className="heading-right">
            <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="new-all-link" data-toggle="tab" href="#new-all-tab" role="tab" aria-controls="new-all-tab" aria-selected="true">All</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="new-tv-link" data-toggle="tab" href="#new-tv-tab" role="tab" aria-controls="new-tv-tab" aria-selected="false">MAN</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="new-computers-link" data-toggle="tab" href="#new-computers-tab" role="tab" aria-controls="new-computers-tab" aria-selected="false">WOMEN</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="new-phones-link" data-toggle="tab" href="#new-phones-tab" role="tab" aria-controls="new-phones-tab" aria-selected="false">JEWELLERY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="new-watches-link" data-toggle="tab" href="#new-watches-tab" role="tab" aria-controls="new-watches-tab" aria-selected="false">ELECTRONICS</a>
              </li>
            </ul>
          </div>{/* End .heading-right */}
        </div>{/* End .heading */}

        <div className="tab-content tab-content-carousel just-action-icons-sm">
          <div className="tab-pane p-0 fade show active" id="new-all-tab" role="tabpanel" aria-labelledby="new-all-link">
              {currentProducts.map((product,key) => {
                return <Product product={product} />
              })}
          
          </div>{/* .End .tab-pane */}
       
       
     
        </div>{/* End .tab-content */}
      </div>{/* End .container */}

    </div>
  )
}

export default NewArrivals

