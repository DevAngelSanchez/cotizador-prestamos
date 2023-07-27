interface Props {
  operator: string,
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<Props> = ({ operator, handleClick }) => {
  return (
    <button
    type='button'
    className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-sky-600 rounded-full hover:ring-1 hover:ring-offset-1 hover:ring-sky-600'
    onClick={handleClick}
  >{operator}</button>
  )
}

export default Button;