import './Search.css';

export const Search = () => {
    return (
        <div className="searchBlock">
          <input className="search" placeholder="Поиск" />
          <button className="searchButton">Поиск</button>
        </div> 
    )
}