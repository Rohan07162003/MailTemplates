
import './App.css';
import Hero from './Components/Hero.jsx'
import Announcements from './Components/Announcements.jsx';
import Educate from './Components/Educate.jsx';
import Ocassions from './Components/Ocassions.jsx';
import Invitations from './Components/Invitations.jsx';
import Dropdown from './Components/Dropdown.jsx';
import EditorialNewspaper from './Components/EditorialNewspaper.jsx';
import FeaturedService from './Components/FeaturedService.jsx';
import NewService from './Components/NewService.jsx';
import WeeklyNewsletter from './Components/WeeklyNewsletter.jsx';
import Search from './Components/Search.jsx';

import { useEffect, useState, useRef } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState('Categories');
  const [Announcementsopen, setAnnouncementsopen] = useState(true);
  const [Ocassionsopen, setOccasionsopen] = useState(true);
  const [Invitationsopen, setInvitationsopen] = useState(true);
  const [Educateopen, setEducateopen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const components = [
    { name: 'EditorialNewspaper', component: <EditorialNewspaper />, date: "2023-10-15", },
    { name: 'FeaturedService', component: <FeaturedService />, date: "2023-09-25", },
    { name: 'NewService', component: <NewService />, date: "2023-10-20", },
    { name: 'WeeklyNewsletter', component: <WeeklyNewsletter />, date: "2023-10-10" },
  ];

  const sortedComponents = new Map(
    [...components.entries()].sort()
  );
  const sortedComponentbydate = [...components].sort((a, b) => new Date(a.date) - new Date(b.date));
  const filteredComponents = components.filter(component => {
    return component.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
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
  componentMap.set("Announcements", { Component: Announcements, clicks: "10" });
  componentMap.set("Ocassions", { Component: Ocassions, clicks: "43" });
  componentMap.set("Invitations", { Component: Invitations, clicks: "23" });
  componentMap.set("Educate", { Component: Educate, clicks: "77" });

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
        <div className='flex items-center justify-between'>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Dropdown sort={sort} setSort={setSort} isOpen={isOpen} setIsOpen={setIsOpen} menuRef={menuRef} />
        </div>
        <div className='md:w-3/4 lg:w-2/3'>
          <div className="grid gap-x-2 gap-y-4 grid-cols-2 lg:grid-cols-3 mt-12 lg:mr-16">
            {searchQuery !== '' && filteredComponents.map((component, index) => (
              <div key={index}>
                {component.component}
              </div>
            ))}
          </div>

        </div>
        <div className='md:w-3/4 lg:w-2/3 grid gap-x-2 gap-y-4 grid-cols-2 lg:grid-cols-3 mt-4 pt-6 lg:mr-16'>
          {sort === "A-Z" && (
            Array.from(sortedComponents.entries()).map(([componentName, Componentinfo], index) => (
              <div key={index} className=''>
                <div className="">
                  {Componentinfo.component}
                </div>

              </div>
            ))
          )}
        </div>
        <div className='md:w-3/4 lg:w-2/3 grid gap-x-2 gap-y-4 grid-cols-2 lg:grid-cols-3 mt-4 pt-6 lg:mr-16'>
          {sort === "Recent" && (
            Array.from(sortedComponentbydate.entries()).map(([componentName, Componentinfo], index) => (
              <div key={index} className=''>
                <div className="">
                  {Componentinfo.component}
                </div>

              </div>
            ))
          )}
        </div>
        {sort === "Categories" && (
          Array.from(sortedComponentMap.entries()).map(([componentName, Componentinfo], index) => (
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
            <input type="checkbox" name="Announcements" onChange={() => { setAnnouncementsopen(!Announcementsopen) }} />
            <span>Announcements</span>
          </label>
          <label className="border px-4 py-3 flex rounded-2xl gap-2 items-center cursor-pointer">
            <input type="checkbox" name="Invitations" onChange={() => { setInvitationsopen(!Invitationsopen) }} />
            <span>Invitations</span>
          </label>
          <label className="border px-4 py-3 flex rounded-2xl gap-2 items-center cursor-pointer">
            <input type="checkbox" name="Ocassions" onChange={() => { setOccasionsopen(!Ocassionsopen) }} />
            <span>Occasions</span>
          </label>
          <label className="border px-4 py-3 flex rounded-2xl gap-2 items-center cursor-pointer">
            <input type="checkbox" name="Educate" onChange={() => { setEducateopen(!Educateopen) }} />
            <span>Educate</span>
          </label>
        </div>

      </div>

    </div >
  );
}

export default App;
