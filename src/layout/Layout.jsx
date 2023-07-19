'use client'
import Link from "next/link"
import { useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

export default function Layout({ children }) {
  const [theme, setTheme] = useState('light');

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  return (
    <main className='md:px-96 px-5'>
      <section>
        <nav className=" py-10 mb-12 flex justify-between">
          <Link href="/">
            <button className="px-1 font-bold hover:scale-110 hover:transition hover:ease-in-out hover:duration-500">
              DRKZZZ
            </button>
          </Link>
          <ul className="flex items-center">
            <li className="cursor-pointer">
              {theme === 'light' ? (
                <BsFillMoonStarsFill onClick={() => handleTheme()} />

              ) : (
                <BsFillSunFill onClick={() => handleTheme()} />
              )}
            </li>
            <li>
              <Link className="py-2 ml-8" href="/Proyectos">
                <button className="px-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md hover:scale-110 hover:transition hover:ease-in-out hover:duration-500-">
                  Proyectos Realizados
                </button>
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </section>
    </main>
  )
}