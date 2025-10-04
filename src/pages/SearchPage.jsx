import { SESSIONS } from "../api";
import Button from "../components/Button";
import SearchBar from "../components/SearchComponent";


export default function SearchPage({addedSessions, toggleSession}) {


console.log(addedSessions);
    return (
    <div className="p-4 border-2 rounded-lg m-4">
      <SearchBar placeholder={"Search by title, track or speaker"}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SESSIONS.map((session) => {
            const isAdded = addedSessions[session.id];
            return <div className="border-4 rounded-lg border-blue-500 p-4 m-4" key={session.id}>
              <h3>{session.title}</h3>
              <p>Track: {session.track}</p>
              <p>Starts: {new Date(session.startsAt).toDateString()} - {session.durationMins} mins</p>
                          <Button
                            onClick={() => toggleSession(session.id)}
                            buttonText={isAdded ? "Remove from schedule" : "Add to schedule"}
                            colour={isAdded ? "bg-red-200" : "bg-blue-200"}
                        />
              <p>Speaker: {session.speaker}</p>
           <div className="flex justify-end">
        <p className="border-2 rounded-xl bg-blue-100 p-2">{session.track}</p>
    </div>
            </div>
})}
    </div>
     </div>
  );
}
