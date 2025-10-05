import { Link } from 'react-router-dom'
import { useSchedule } from '../context/ScheduleContext';

export default function NavBar() {

  const {sessionIds} = useSchedule()

  return (
    <nav className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link to="/">
         <img className="h-16 sm:h-20 md:h-24 lg:h-32 cursor-pointer" src="/assets/SessionFinder.png"></img>
          </Link>
      <h1 className="text-sm sm:text-xs md:text-lg lg:text-2xl font-bold">Session Finder</h1>
        </div>
      <ul className="flex text-sm sm:text-xs md:text-lg lg:text-2xl font-bold">

      <Link to="/"  className="hover:bg-sky-400 rounded transition-all duration-600 ease-in-out px-6">Home</Link>
      <Link to="/MySchedule"  className="hover:bg-sky-400 rounded transition-all duration-600 ease-in-out px-6">{`My Schedule (${sessionIds.length}) `}</Link>
      <Link to="/Register"  className="hover:bg-sky-400 rounded transition-all duration-600 ease-in-out px-6">Register</Link>


      </ul>
    </nav>
  );
}
