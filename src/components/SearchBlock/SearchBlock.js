import CategorySearch from "./CategorySearch";
import SearchForm from "./SearchForm";

/**
 * "Блок поиска"- вывод категории поиска, формы поиска, информации о популярных запросах
 */

export default function Page() {
  const helpSearch = "фаза луны сегодня";
  return (
    <>
      <CategorySearch />
      <SearchForm />
      <div className='help-search'>
        <span>
          Найдется всею Например, <i className='help-search'>{helpSearch}</i>
        </span>
      </div>
    </>
  );
}
