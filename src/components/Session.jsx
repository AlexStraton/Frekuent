import Button from "./Button"
import { useSchedule } from "../context/ScheduleContext";

export default function Session ( { session } ) {
    const { add , remove , sessionIds } = useSchedule();
    const matchedSession = sessionIds.filter(sess => sess === session.id).length > 0;

 return <div className="border-4 rounded-lg border-blue-500 p-4 m-4" key={session.id}>
              <h3>{session.title}</h3>
              <p>Track: {session.track}</p>
              <p>Starts: {new Date(session.startsAt).toDateString()} - {session.durationMins} mins</p>

                { }
                <Button
                    onClick={() => !matchedSession ? add(session.id) : remove(session.id)}
                    buttonText={!matchedSession ? "Add to schedule" : "Remove from schedule"}
                    colour={matchedSession ? "bg-red-200" : "bg-blue-200"}
                />
              <p>Speaker: {session.speaker}</p>
                <div className="flex justify-end">
                <p className="border-2 rounded-xl bg-blue-100 p-2">{session.track}</p>
    </div>
  </div>
}
