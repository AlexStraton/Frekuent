import { SESSIONS } from "../api";
import Button from "../components/Button";
import { useSchedule } from "../context/ScheduleContext";

export default function MySchedule() {
const { sessionIds, remove } = useSchedule();

const chosenSessions = SESSIONS.filter(session => sessionIds.includes(session.id))


    return (
        <div className="p-4 border-2 rounded-lg m-4">
            <h2>My Schedule</h2>
            {chosenSessions.length === 0 ? (
        <p>No sessions yet. Go to Search to add some.</p>
      ) : chosenSessions.map(session => (
                <div key={session.id} className="border-4 rounded-lg border-blue-500 p-4 m-4">
                    <h3>{session.title}</h3>
                    <p>Starts: {new Date(session.startsAt).toDateString()} - {session.durationMins} mins</p>
                    <p>Speaker: {session.speaker}</p>
                   <div className="flex justify-end">
        <p className="border-2 rounded-xl bg-blue-100 p-2">{session.track}</p>
        <Button  onClick={() =>  remove(session.id)}
                    buttonText={"Remove from schedule"}
                    colour={"bg-red-500"}></Button>
    </div>
                </div>
            ))}
        </div>
    )
}
