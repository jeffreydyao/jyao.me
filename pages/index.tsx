import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SocialIcons from '../components/SocialIcons'
import listeningTo from '../public/listeningto.png'

const Home: NextPage = () => {
  return (
    <div className="bg-neutral-900 min-h-screen flex flex-col items-center">
      <Head>
        <title>Jeffrey Yao</title>
        <meta name="description" content="First-year Computer Science student @ UNSW" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="items-start mt-24">
        <header className="flex flex-col justify-start ">
          <h1 className="text-md text-neutral-50 font-semibold">Jeffrey Yao</h1>
          <p className="text-neutral-400 text-sm pt-2">First-year Computer Science student · UNSW · Sydney</p>
          <p className="text-neutral-300 text-sm pt-6 max-w-[26rem]">When I’m not studying, I develop side projects that scratch the itch to build beautiful, performant things that solve problems.</p>
          <SocialIcons />
        </header>

        <main>
          <div class="relative mt-12"> {/* Check if there's a better way to align elements */}
            <h2 className="text-neutral-50 text-sm absolute left-[-4rem] top-0">Now</h2>
            <p className="text-neutral-50 text-sm">Settling into CS, building things for fun and exploring Sydney more! -&gt; </p>
          </div>

          <div class="relative mt-16"> {/* Check if there's a better way to align elements */}
            <h2 className="text-neutral-50 text-sm absolute left-[-5.5rem] top-0">Projects</h2>
            <div className="flex flex-col ">
              <Image
                src={listeningTo}
                alt="Mockup of Listening To app"
                width={500}
                height={220}
                className="rounded-[0.875rem]"
              />
              <h3 className="text-neutral-50 text-base pt-9">Listening To</h3>
              <p className="text-neutral-400 text-sm pt-1">January 2022</p>
              <div className="flex flex-row justify-start pt-3 gap-14">
                <div className="flex flex-col gap-4">
                  <p className="text-neutral-300 text-sm max-w-xs leading-5">Lets Last.fm users share a link with their friends that shows what music they’ve been listening to recently.</p>
                  <p className="text-neutral-300 text-sm max-w-xs leading-5">Built with Next.js + React + Last.fm API, deployed with Vercel.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="border-t-2 w-8 border-neutral-600" />
                  <a href="https://listening-to.vercel.app" className="text-neutral-100 text-xs pt-1">Check it out -&gt;</a>
                  <a href="https://github.com/jeffreydyao/listening-to-v2" className="text-neutral-100 text-xs">GitHub -&gt;</a> {/* Update once finished */}

                </div>


              </div>

            </div>



          </div>

        </main>

      </div>

      
    </div>
  )
}

export default Home
