import React from 'react'
import "./Search.css"

const Search = ({search}) => {
return (
<div>
<div className="searchcontainer">
<input className="searchinput" type="text" placeholder="Search by title " onChange={(e) => search(e.target.value)} />

</div> 
</div> 
) }
export default Search