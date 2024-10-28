export default function ButtonPri({children, onButtonClick}) {
  return (
    <button className='bg-black text-white text-2xl px-10 py-1 font-semibold rounded-lg hover:bg-slate-900' onClick={onButtonClick}>{children}</button> 
  )
}
