import { SESSIONS } from "../api";
import { useMemo } from "react";

export default function MySchedule({addedSessions}) {
const selectedSessions = useMemo(() => {
 return SESSIONS.filter(session => addedSessions[session.id]);
})
console.log("fultered", selectedSessions);
    return (
        <div>
            <h2>My Schedule</h2>
            {selectedSessions.length === 0 ? (
        <p>No sessions yet. Go to Search to add some.</p>
      ) : selectedSessions.map(filteredSession => (
                <div key={filteredSession.id} className="border-4 rounded-lg border-blue-500 p-4 m-4">
                    <h3>{filteredSession.title}</h3>
                    <p>Starts: {new Date(filteredSession.startsAt).toDateString()} - {filteredSession.durationMins} mins</p>
                    <p>Speaker: {filteredSession.speaker}</p>
                   <div className="flex justify-end">
        <p className="border-2 rounded-xl bg-blue-100 p-2">{filteredSession.track}</p>
    </div>
                </div>
            ))}
        </div>
    )
}
