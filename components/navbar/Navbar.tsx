import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"

const navItems = [
    {path:'/about',text:'About'},
    {path:'/contact',text:'Contact'},
    {path:'/pricing',text:'Pricing'},
    {path:'/panel/employees',text:'Panel'},

]

const Navbar = () => {
  return (
   <nav className="flex bg-gray-800 p-2 m-2 rounded gap-8 h-12">
    <Link className="mr-2 flex items-center" href="/">
        <HomeIcon className="mr-2"  />
        <span>Home</span> 
    </Link>
    <div className="flex flex-1"></div>
    {
        navItems.map(navItem=>(
            <Link key={navItem.path} className="mr-2" href={navItem.path}>{navItem.text}</Link>
        ))
    }
    {/*
     <Link className="mr-2" href="/about">About</Link>
    <Link className="mr-2" href="/pricing">Pricing</Link>
    <Link className="mr-2" href="/contact">Contact</Link>
     */}
   
   </nav>
  )
}

export default Navbar
