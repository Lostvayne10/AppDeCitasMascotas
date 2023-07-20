

function Error({children}) {
  return (
    <div className="uppercase font-bold mb-3 rounded-md text-white text-center bg-red-800 p-3">
        <p> {children} </p>
    </div>
  )
}

export default Error