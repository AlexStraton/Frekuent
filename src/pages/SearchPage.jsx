import { SESSIONS } from "../api";
import Button from "../components/Button";
import SearchBar from "../components/SearchComponent";
import { useState } from "react";

export default function SearchPage() {
    console.log(SESSIONS);

const [addedSessions, setAddedSessions] = useState({});

const handleClick = (sessionId) => {
    setAddedSessions(prev => ({
        ...prev,
        [sessionId]: !prev[sessionId]
    }));
}

    return (
    <div >
      <SearchBar placeholder={"Search by title, track or speaker"}/>
      <h2>Search Page</h2>
      <input type="text" placeholder="Search..." />
          {SESSIONS.map((session) => {
            const isAdded = addedSessions[session.id];
            return <div className="border-4 rounded-lg border-blue-500 p-4 m-4" key={session.id}>
              <h3>{session.title}</h3>
              <p>Track: {session.track}</p>
              <p>Starts: {new Date(session.startsAt).toDateString()} - {session.durationMins} mins</p>
                          <Button
                            onClick={() => handleClick(session.id)}
                            buttonText={isAdded ? "Remove from schedule" : "Add to schedule"}
                            colour={isAdded ? "bg-red-200" : "bg-blue-200"}
                        />
              <p>Speaker: {session.speaker}</p>
            </div>
})}
    </div>
  );
}
