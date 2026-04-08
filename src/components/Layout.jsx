import Header from "./Header";
import Calendar from "../features/calendar/Calendar";
import Notes from "./Notes";

const Layout = () => {
  return (
    <div className="max-w-6xl mx-auto mt-6 shadow-2xl rounded-3xl overflow-hidden bg-white">
      <Header />

      <div className="grid md:grid-cols-2 divide-x">
        <Calendar />
        <Notes />
      </div>
    </div>
  );
};

export default Layout;
