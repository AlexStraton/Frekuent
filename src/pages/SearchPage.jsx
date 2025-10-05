import { SESSIONS } from "../api";
import Button from "../components/Button";
import SearchBar from "../components/SearchComponent";
import Fuse from "fuse.js";
import { useState } from "react";
import { useMemo } from "react";
import Session from "../components/Session";

export default function SearchPage() {
const [search, setSearch] = useState("");

const fuse = useMemo(() => {
    return new Fuse(SESSIONS, {
      keys: ["title", "track", "speaker"],
    });
  }, []);

  const searchedSessions = useMemo(() => {
    const searchWord = search.trim();
    if (!searchWord) return SESSIONS;
    return fuse.search(searchWord).map((r) => r.item);
  }, [search, fuse]);

    return (
    <div className="p-4 border-2 rounded-lg m-4">
      <SearchBar value={search}
        onSearch={setSearch} placeholder={"Search by title, track or speaker"}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchedSessions.map((session) => {
             return (<Session key={session.id} session={session} />)
          })}
       </div>
     </div>
  );
}
