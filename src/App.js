
import './App.css';
import Hero from './Components/Hero.jsx'
import Announcements from './Components/Announcements.jsx';
import Educate from './Components/Educate.jsx';
import Ocassions from './Components/Ocassions.jsx';
import Invitations from './Components/Invitations.jsx';
import Dropdown from './Components/Dropdown.jsx';
import { useEffect, useState, useRef } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState('Recent');
  const [Announcementsopen, setAnnouncementsopen] = useState(true);
  const [Ocassionsopen, setOccasionsopen] = useState(true);
  const [Invitationsopen, setInvitationsopen] = useState(true);
  const [Educateopen, setEducateopen] = useState(true);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
        console.log(menuRef.current);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    }
  });
  const componentMap = new Map();
  componentMap.set("Announcements", { Component: Announcements, date: "2023-10-15", clicks: "10" });
  componentMap.set("Ocassions", { Component: Ocassions, date: "2023-09-25", clicks: "43" });
  componentMap.set("Invitations", { Component: Invitations, date: "2023-10-20", clicks: "23" });
  componentMap.set("Educate", { Component: Educate, date: "2023-10-10", clicks: "77" });

  const sortedComponentMap = new Map(
    [...componentMap.entries()].sort()
  );

  const sortbydateComponentMap = new Map(
    [...componentMap.entries()].sort((a, b) => new Date(a[1].date) - new Date(b[1].date))
  );
  const sortbyuseComponentMap = new Map(
    [...componentMap.entries()].sort((a, b) => b[1].clicks - a[1].clicks)
  );

  return (
    <div className="App">
      <Hero />
      <div className="px-3 md:px-14 pt-5">
        <Dropdown sort={sort} setSort={setSort} isOpen={isOpen} setIsOpen={setIsOpen} menuRef={menuRef} />
        {sort === "A-Z" && (
          Array.from(sortedComponentMap.entries()).map(([componentName, Componentinfo], index) => (
            <div key={index}>
              <Componentinfo.Component />
               
            </div>
          ))
        )}
        {sort === "Recent" && (
          Array.from(sortbydateComponentMap.entries()).map(([componentName, Componentinfo], index) => (
            <div key={index}>
              <Componentinfo.Component />
            </div>
          ))
        )}
        {sort === "Popular" && (
          Array.from(sortbyuseComponentMap.entries()).map(([componentName, Componentinfo], index) => (
            <div key={index}>
              <Componentinfo.Component />
            </div>
          ))
        )}
        <div className="flex flex-col justify-center w-48">
          <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
            <input type="checkbox" name="Announcements" onChange={()=>{setAnnouncementsopen(!Announcementsopen)}} />
            <span>Announcements</span>
          </label>
          <label className="border px-4 py-3 flex rounded-2xl gap-2 items-center cursor-pointer">
            <input type="checkbox" name="Invitations" onChange={()=>{setInvitationsopen(!Invitationsopen)}}/>
            <span>Invitations</span>
          </label>
          <label className="border px-4 py-3 flex rounded-2xl gap-2 items-center cursor-pointer">
            <input type="checkbox" name="Ocassions" onChange={()=>{setOccasionsopen(!Ocassionsopen)}}/>
            <span>Occasions</span>
          </label>
          <label className="border px-4 py-3 flex rounded-2xl gap-2 items-center cursor-pointer">
            <input type="checkbox" name="Educate" onChange={()=>{setEducateopen(!Educateopen)}}/>
            <span>Educate</span>
          </label>
          {Announcementsopen}
        </div>
      </div>

    </div >
  );
}

export default App;
