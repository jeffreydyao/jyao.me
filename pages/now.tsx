import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SocialIcons from '../components/SocialIcons'
import listeningTo from '../public/listeningto.png'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="bg-neutral-900 min-h-screen flex flex-col items-center md:px-0 px-6">
      <Head>
        <title>Now · Jeffrey Yao</title>
        <meta name="description" content="What I'm doing now" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="items-start md:mt-24 mt-8">
        <header className="flex flex-col justify-start ">
          <h1 className="text-md text-neutral-50 font-semibold">Jeffrey Yao</h1>
          <p className="text-neutral-400 text-sm pt-2">First-year Computer Science student · UNSW · Sydney</p>
          <p className="text-neutral-300 text-sm pt-6 max-w-[26rem]">When I’m not studying, I develop side projects that scratch the itch to build beautiful, performant things that solve problems.</p>
          <SocialIcons />
        </header>

        <main>
          <div className="md:relative mt-12">
            <Link href="/" passHref>
              <h2 className="text-neutral-50 text-sm md:absolute md:left-[-5.1rem] pb-2 md:top-0 hover:text-blue-300 hover:cursor-pointer transition-all duration-[100] font-medium">&lt;- Now</h2>
            </Link>
            <p className="text-neutral-400 text-sm">Last updated January 28th, 2022, from Sydney.</p>
            <h3 className="text-neutral-50 text-md font-semibold pt-6">Considering the direction of my career</h3>
            <p className="text-neutral-50 text-sm leading-[1.4rem] pt-3 max-w-[500px]">Before studying CS, I used to want to become a doctor and studyed Biomedical Engineering while gunning med admissions. CS and Medicine overlap in that you can help people - just in different ways. For example, working in health tech to improve patient outcomes.</p>
            <p className="text-neutral-50 text-sm leading-[1.4rem] pt-4 max-w-[500px]">I&apos;m trying to find the shape of what that career would look like while keeping my options open. I want to work on interesting problems. If you have any advice or opportunities in the space for me, <a href="mailto:hello@jyao.me" className="hover:text-blue-300 hover:cursor-pointer transition-all duration-[100]">please reach out!</a> I&apos;d love to hear from you.</p>
            <h3 className="text-neutral-50 text-md font-semibold pt-6">Building cool stuff</h3>
            <p className="text-neutral-50 text-sm leading-[1.4rem] pt-3 max-w-[500px]">Developing ideas that I have and using them as a chance to try new frameworks / libraries / technologies!</p>
            <p className="text-neutral-50 text-sm leading-[1.4rem] pt-4 max-w-[500px]">I&apos;m finishing up an app that shows what I&apos;m listening to at the moment. I have a couple of ideas for my next one - trying out real-time collaboration libraries (i.e. Figma), doing data analysis, APIs. I&apos;m excited to get stuck into the next thing.</p>
            <h3 className="text-neutral-50 text-md font-semibold pt-6">Seeking out as many opportunities as possible</h3>
            <p className="text-neutral-50 text-sm leading-[1.4rem] pt-3 max-w-[500px]">Internships and ways of gaining practical experience.</p>
            <h3 className="text-neutral-50 text-md font-semibold pt-6">Exploring more</h3>
            <p className="text-neutral-50 text-sm leading-[1.4rem] pt-3 max-w-[500px]">I haven&apos;t gone out much recently because of COVID, and there&apos;s heaps to explore in Sydney - so I&apos;m trying to do more of that now. </p>
            <h3 className="text-neutral-50 text-md font-semibold pt-6">Trying to take more photos</h3>
            <p className="text-neutral-50 text-sm leading-[1.4rem] pt-3 max-w-[500px]">Going to get a cheap film camera and start shooting on it - I&apos;ve used VSCO and NOMO Cam on my phone for a while, but tactile beats digital any day. I&apos;ll update this section once I get some photos!</p>
          </div>

        </main>

      </div>

      
    </div>
  )
}

export default Home
