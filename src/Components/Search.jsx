/** @format */
import React from "react";
import { useRouter } from "next/navigation";
import { useSearch } from "./context/SearchContext";

const SearchComponent = () => {
  const router = useRouter();
  const { query, handleInputChange } = useSearch();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      if (query && query.trim() !== "") {
        router.push(`/search?q=${encodeURIComponent(query)}`);
      }
    }
  };

  return (
    <div>
      <form
        method='get'
        id='searchForm'
        onSubmit={(e) => e.preventDefault()}>
        <input
          type='hidden'
          name='app'
          value='search.run'
        />
        <input
          type='text'
          className='search-form'
          name='q'
          placeholder='بحث : الكلمات المفتاحية #الهاش_تاج'
          pattern='.{2,}'
          required
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // Trigger navigation on Enter
        />
      </form>
    </div>
  );
};

export default SearchComponent;
