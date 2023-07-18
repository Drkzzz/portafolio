import Link from "next/link"
import { BsFillMoonStarsFill } from 'react-icons/bs'

export default function Layout({ children }) {
  return (
    <main className='md:px-96 px-10 mx-auto'>
      <section className="min-h-screen">
        <nav className=" py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">DRKZZZ</h1>
          <ul className="flex items-center">
            <li>
              <Link className="px-4 py-2 ml-8 bg-gradient-to-r from-cyan-500 to-teal-500  rounded-md" href="#">Resume</Link>
            </li>
          </ul>
        </nav>
        {children}
      </section>
    </main>
  )
}