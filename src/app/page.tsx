// DatBoiSUS-Baka
// 03-Jul-2025
// app/page.tsx

import Button from './button';


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      {/* Main Section */}
        <div className='row-start-1'>
          <h1 className="text-6xl text-center">DatBoiSite</h1>
          <h2 className="text-2xl text-center">A Personal Portfolio Website</h2>
        </div>

        <div className="row-start-2 items-center flex flex gap-5">

          {/* <img
          className="rounded-md"
          src="/personal-photo.jpg"
          alt="Aphoey's profile photo"
          width={368}
          height={197}
          /> */}

          <div className='flex flex-col'>
            <Button link='/groups'>Groups</Button>
            <Button link='/performances'>Performances</Button>
            <Button link='/projects'>Projects</Button>
          </div>
        </div>

      {/* --Main Section */}

      {/* Footer Section-- */}

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <h2>Created by DatBoiSUS-Baka using Next.js</h2>
      </footer>

      {/* --Footer Section */}

    </div>
  );
}
