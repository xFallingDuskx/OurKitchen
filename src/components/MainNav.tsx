'use client'
import Link from 'next/link'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

export const MainNav = () => {
    return (
        <>
            <Nav className="flex mt-0 bg-zinc-100 ">
                <Navbar.Brand href="/" className='align-middle ml-2 py-2 text-black font-serif text-3xl font-extrabold hover:underline hover:underline-offset-4 hover:decoration-yellow-500 hover:decoration-4'>YourKitchen</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />


                <div className=' flex mx-auto font-serif text-2xl font-semibold'>
                    <NavDropdown title='Recipes' id='recipe-nav-dropdown' >
                        <Link href="/signup/" className='dropdown-item'>Sign Up</Link>
                        <NavDropdown.Item href="#">Find recipes</NavDropdown.Item>
                        <NavDropdown.Item href="#">Add your own recipes</NavDropdown.Item>
                        <NavDropdown.Item href="#">View collections</NavDropdown.Item>
                    </NavDropdown>
                    <Link href="/meal-plan" className='my-auto mr-4 text-pink-900 hover:text-red-600'>Meal Plan</Link>
                    <Link href="/cookbooks" className='my-auto mr-4 text-pink-900 hover:text-red-600'>Cookbooks</Link>
                    <Link href="/about" className='my-auto text-pink-900 hover:text-red-600'>About</Link>
                </div>

                <div className='flex align-middle ml-auto'>
                    <Link href="/signup/" className='my-auto text-pink-900 hover:text-red-600 font-serif text-2xl font-semibold'>Sign Up</Link>
                    <Link href="/signin/" className='mx-3 my-auto text-pink-900 hover:text-red-600 font-serif text-2xl font-semibold'>Log In</Link>
                </div >

            </Nav>
            <style>{`
                #recipe-nav-dropdown {
                    color: rgb(131 24 67); // text-red-600
                }
                #recipe-nav-dropdown:hover {
                    color: rgb(220 38 38); // text-pink-900
                }
                .dropdown a:hover {
                    display: block;
                    color: rgb(220 38 38); // text-pink-900
                    text-decoration: none;
                    // transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
                }
            `}</style>
        </>
    )
}
