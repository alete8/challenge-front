import CloseIcon from '../assets/icons/CloseIcon'

interface IProps {
  children: JSX.Element
  title: string
  onClose: () => void
}

const Modal = ({ children, title, onClose }: IProps): JSX.Element => {
  return (
    <div className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-slate-300/70">
      <div className="flex bg-white rounded-lg p-4 min-w-96">
        <div className="flex flex-col w-full">
          <div className='flex justify-between' onClick={onClose}>
            <span className='text-md font-bold'>{title}</span>
            <CloseIcon />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
