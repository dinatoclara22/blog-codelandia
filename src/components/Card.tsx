import { Heart } from "phosphor-react";

export function Card() {
  return(
    <main className="h-screen bg-slate-200 flex justify-center pt-20">
      <section className="bg-white h-[195px] w-[900px] flex flex-col justify-center px-5 rounded-xl">
        <div className="flex justify-between items-center pb-5">
          <h6 className="text-sm">02 de jul, 2021</h6>
          <Heart size={24} className='text-indigo-500'/>
        </div>
        <div>
          <h1 className="font-medium text-xl ">Agora é oficial: o Windows 11 está vindo</h1>
          <p className="text-lg text-gray-500 pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.</p>
        </div>
      </section>
    </main>
  )
}