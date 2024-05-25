const Title = ({ title }) => {
    return (
        <div className='pl-3 text-xl font-bold text=[#333333] relative
            before:absolute before:w-1 before:h-full before:bg-lime-600 before:left-0'>
            {title}
        </div>
    )
}

export default Title
