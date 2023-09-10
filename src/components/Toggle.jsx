const Toggle = () => {
    return (
        <label htmlFor="check" className='bg-gray-300 cursor-pointer relative w-10 h-5 rounded-full'>
            <input type="checkbox" id='check' className='sr-only peer' />
            <span className='w-2/5 h-4/5 bg-yellow-300 absolute rounded-full left-[0.1rem] top-[0.135rem] peer-checked:bg-slate-700 peer-checked:left-5 transition-all duration-[250msq]'></span>
        </label>
    )
}

export default Toggle

