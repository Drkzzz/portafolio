'use client'
import Link from "next/link"
import { useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineMenu } from 'react-icons/ai'

export default function Layout({ children }) {

  const [theme, setTheme] = useState('light');
  const [open, setOpen] = useState(false);

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  const handleOpen = () => {
    if (open) {
      setOpen(false);
    }
  }

  return (
    <main className='md:px-96 px-5'>
      <section>
        <nav className="py-10 mb-12 flex justify-between">
          <div className="flex items-center">
            <Link href="/">
              <button className="px-1 font-bold hover:scale-110 hover:transition hover:ease-in-out hover:duration-500" onClick={() => handleOpen()}>
                DRKZZZ
              </button>
            </Link>
            <div className="cursor-pointer ml-3">
              {theme === 'light' ? (
                <BsFillSunFill className="transition ease-in-out duration-75" onClick={() => handleTheme()} />
              ) : (
                <BsFillMoonStarsFill className="transition ease-in-out duration-75" onClick={() => handleTheme()} />
              )}
            </div>
          </div>
          {/*Menú con botones oculto por el momento*/}
          <div className="hidden">
            <ul className="flex items-center">
              <li>
                <Link className="py-2 ml-8" href="/Proyectos">
                  <button className="px-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md hover:scale-105 hover:transition hover:ease-in-out hover:duration-500-">
                    Proyectos Realizados
                  </button>
                </Link>
                <Link className="py-2 ml-2" href='/'>
                  <button className="px-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md hover:scale-105 hover:transition hover:ease-in-out hover:duration-500-">
                    Reconocimientos
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          {/*Menú de hamburguesa*/}
          <div>
            <div className="font-medium relative">
              <button className={`w-full p-2 flex items-center justify-between rounded transition-transform duration-300 ${open ? "scale-105" : "scale-100"}`} onClick={() => setOpen(!open)}>
                <AiOutlineMenu />
              </button>
              <ul
                className={`mt-2 max-h-24 right-0 z-10 overflow-y-auto absolute rounded transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <div className="">
                  <Link href="/Proyectos" onClick={() => setOpen(!open)}>
                    <li className="p-2 text-sm hover:bg-teal-500 hover:text-white text-right">
                      Proyectos Realizados
                    </li>
                  </Link>
                  <Link href='/Reconocimientos' onClick={() => setOpen(!open)}>
                    <li className="p-2 text-sm hover:bg-teal-500 hover:text-white text-right">
                      Reconocimientos
                    </li>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </nav>
        {children}
      </section>
    </main>
  )
}