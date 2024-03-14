interface IProps {
  label: string | undefined
  type?: string | undefined
  value: string | number | undefined
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

const FormInput = ({ label, type = 'text', value, onChange }: IProps): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default FormInput
