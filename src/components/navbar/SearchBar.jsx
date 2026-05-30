import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="w-[30%] flex items-center gap-2 bg-white  rounded-[10px] border border-blue-400">
    <input type="search" placeholder="Find influencers to collaborate with" className="  px-3 py-[10px] w-[100%]  "/>
    <FontAwesomeIcon icon={faSearch} className="relative -left-5"/>
    </div>
  )
}

export default SearchBar