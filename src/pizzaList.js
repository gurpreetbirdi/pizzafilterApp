import React from 'react';
import PropTypes from "prop-types";

const Filter = ({ list, searchString }) => {
	searchString = searchString.trim().toLowerCase();
	if(searchString.length > 0){
		list = list.filter(item => item.toLowerCase().match( searchString ));
	}
	return(
		<ul> 
	    {list.map(item=><li key={item}>{item}</li>)}
		</ul>
	)
};

Filter.propTypes = {
  list: PropTypes.array.isRequired,
  searchString: PropTypes.string.isRequired,
};

export default Filter;
