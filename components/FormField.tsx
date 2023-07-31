//  The ? means it is not compulsory

type Props = {
  type?: string,
  title: string,
  state: string,
  placeholder: string,
  isTextArea?: boolean,
  setState: (value: string) => void
}

const FormField = ({ type, title, state, placeholder, isTextArea, setState }: Props) => {
  return (
    <div className="flexStart flex-col w-full gap-4">
      <label className="w-full text-gray-100">
        {title}
      </label>
      {isTextArea ? (
        <textarea
          value={state}
          placeholder={placeholder}
          required
          className="form_field-input"
          onChange={(e) => setState(e.target.value)}
        />) : (
        <input
          type={type || 'text'}
          value={state}
          placeholder={placeholder}
          required
          className="form_field-input"
          onChange={(e) => setState(e.target.value)}
        />)}
    </div>
  )
}

export default FormField