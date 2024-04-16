import './Button.css'

// Используем специальный пропс children, чтобы передать параметр
export default function Button({children, onClick, isActive, ... props}) {

    const handleMouseEnter = () => console.log('entered')

    return (<button 
        {... props}
        className= {isActive ? 'button active' : 'button'} 
        onClick={onClick} 
    /*onMouseEnter={handleMouseEnter} 
    onDoubleClick={() => console.log('dbl')}*/ 
    >
            {children}
        </button>
    )
}