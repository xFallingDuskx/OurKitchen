import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'YourKitchen - Home',
  description: 'Website to store your recipes, search recipes, create meals plans, and more.',
}

export default function Home() {
  return (
    <div id="container" className='relative flex flex-row-reverse items-center min-h-screen overscroll-contain'>
      <Image
        className='-z-10'
        src='/home_background.jpg'
        layout='fill'
        objectFit="cover"
        alt='background image of a cutting board'
        priority={true}
      />
      <Image
        className='basis-1/3 p-24'
        src='/chef.svg'
        alt='chef women holding spatuala'
        width={100}
        height={200}
        // sizes="10vw"
        // style={{
        //   width: '10%',
        //   height: 'auto',
        // }}
      />

      <div className='bg-white/40 basis-2/3 ml-5 p-5 w-fit rounded-3xl'>
        <h1 className='text-black font-serif text-9xl font-extrabold'>Your Kitchen</h1>
        <h2 className='text-black font-serif text-2xl font-extrabold mb-5'>Here to help you with your cooking journey!</h2>
        <h2 className='text-pink-900 font-serif text-2xl font-semibold'>You've come to the right place if you're here to </h2>
        <ul>
          <li>{'>'}  Find recipes</li>
          <li>{'>'}  Store your own recipes</li>
          <li>{'>'}  Create meal plans</li>
        </ul>
      </div>
      <style>{`
        li {
          color: rgb(75 85 99);
          font-weight: 600;
          font-size: 1.25rem; /* 20px */
          line-height: 1.75rem;
        }
      `}</style>
    </div>
  )
}
