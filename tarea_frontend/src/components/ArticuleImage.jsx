

export const ArticuleImage = ({img, number, tittle, text}) => {
  return (
    <article className='flex mb-8'>
      <div className='w-[100px] flex-none'>
        <img src={img} alt="articleimg" />
      </div>
      <div className='pl-5'>
        <h1 className='text-slate-400 text-3xl mb-[10px] font-bold'>{number}</h1>
        <h2 className='font-bold cursor-pointer hover:text-red-400' >{tittle}</h2>
        <p className='text-slate-500'>{text}</p>
      </div>
    </article>
        
    
  )
}
