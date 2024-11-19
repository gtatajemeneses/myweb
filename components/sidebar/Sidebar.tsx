import { PeopleIcon, PersonIcon } from '@primer/octicons-react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col py-4 fixed left-0 top-16">
        <ul>
            <li className='mb-4'>
                <Link className="flex items-center px-4 py-2 hover:bg-gray-700 rounded" 
                href="/">
                    <PersonIcon className='mr-2'/>
                    Users
                </Link>
            </li>
            <li className='mb-4'>
                <Link className="flex items-center px-4 py-2 hover:bg-gray-700 rounded" 
                href="/">
                    <PeopleIcon className='mr-2'/>
                    Roles
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar
