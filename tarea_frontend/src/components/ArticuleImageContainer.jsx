import { ArticuleImage } from "./ArticuleImage"
import imageArticle from '../assets/images/image-retro-pcs.jpg'
import imageArticle2 from '../assets/images/image-top-laptops.jpg'
import imageControl from '../assets/images/image-gaming-growth.jpg'

export const ArticuleImageContainer = () => {
  return (
    <section className="lg:flex mb-4">
        <ArticuleImage 
            img={imageArticle}
            number="01"
            tittle="Reviving Retro PCs"
            text="What happens when old PCs are given modern upgrades?"/>
        <ArticuleImage
            img={imageArticle2}
            number="02"
            tittle="Top 10 Laptops of 2022"
            text="Our best picks for various needs and budgets."/>
        <ArticuleImage
            img={imageControl}
            number="03"
            tittle="The Growth of Gaming"
            text="How the pandemic has sparked fresh opportunities."/>
    </section> 
  )
}
