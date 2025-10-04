import { SESSIONS } from "../api";
import SearchBar from "../components/SearchComponent";

export default function SearchPage() {
    console.log(SESSIONS);
  return (
    <div >
      <SearchBar placeholder={"Search by title, track or speaker"}/>
      <h2>Search Page</h2>
      <input type="text" placeholder="Search..." />
        <li>

        </li>
    </div>
  );
}
