export const ArticuleRight = ({tittle, text}) => {
  return (
    <article className="h-[140px] lg:h-[220px] xl:h-[200px] border-b-2 border-slate-600 py-5 last:border-none lg:py-2 xl:py-5">
        <h2 className="text-[23px] font-bold hover:text-orange-400 mb-2 cursor-pointer">{tittle}</h2>
        <p className="lg:text-[19px] xl:text-[17px] md:text-[20px]">{text}</p>
    </article>
  )
}
