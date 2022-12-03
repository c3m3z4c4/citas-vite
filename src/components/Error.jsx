
const Error = ({children}) => {
  return (
    <div className="bg-red-500 text-white text-center p-3 uppercase font-bold d mb-3 rounded-md">
      <p>{children}</p>
    </div>
  )
}

export default Error
