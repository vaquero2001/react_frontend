import { ArticuleRight } from "./ArticuleRight"

export const NewContainer = () => {
  return (
    <aside className="bg-slate-950 text-slate-50 py-[22px] px-[30px] mb-14">
        <h1 className="text-orange-400 text-[40px] font-bold">New</h1>
        <ArticuleRight tittle="Hydrogen VS Electric Cars" text="Will hydrogen-fueled cars ever catch up to EVs?" />
        <ArticuleRight tittle="The Downsides of AI Artistry" text="What are the possible adverse effects of on-demand AI image generation?" />
        <ArticuleRight tittle="Is VC Funding Drying Up?" text="Private funding by VC firms is down 50% YOY. We take a look at what that means." />
    </aside>
  )
}
