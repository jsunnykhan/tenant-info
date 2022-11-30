import React, { useRef, useState } from "react";

import { TbSearch } from "react-icons/tb";

const SearchBar = () => {
  const [tab, setTab] = useState<boolean>(false);

  const ref = useRef(null);
  return (
    <div className="flex items-center justify-center ">
      <div
        className={`flex items-center rounded-full transition-all  ${
          tab ? "px-5 border-[2px] ease-linear duration-500" : "border-0 ease-linear duration-100"
        }`}
      >
        <TbSearch
          onClick={() => setTab((pre: boolean) => (pre = !pre))}
          className="transition-transform duration-1000"
        />
        {tab ? (
          <input type="text" className="outline-0 py-1" placeholder="search" ref={ref}/>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
