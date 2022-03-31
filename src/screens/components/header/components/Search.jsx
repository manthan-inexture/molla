import React,{ useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Search(props) {
    const [keyword, setKeyword] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const onSubmitHandler = e => {
        e.preventDefault();
        // alert(keyword)
        // setSearchParams({q: `${keyword}`})
        navigate(`/shop/q=${keyword}`)
    }
    const test = searchParams.get('q');
    console.log(`usesearchparams${test}`)

    return (
        <div>
            <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
              <a href="#" className="search-toggle" role="button">
                <i className="icon-search" />
              </a>
              <form action="#" method="get" onSubmit={onSubmitHandler}>
                <div className="header-search-wrapper search-wrapper-wide">
                  <label htmlFor="q" className="sr-only">
                    Search
                  </label>
                  <button className="btn btn-primary" type="submit">
                    <i className="icon-search" />
                  </button>
                  <input
                    type="search"
                    className="form-control"
                    name="q"
                    id="q"
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Search product ..."
                    required
                  />
                </div>
                {/* End .header-search-wrapper */}
              </form>
            </div>
        </div>
    );
}

export default Search;