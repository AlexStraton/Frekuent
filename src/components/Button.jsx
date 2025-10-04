

export default function Button({ buttonText, colour, onClick }) {
    return (
            <button
              className={`w-fit whitespace-nowrap cursor-pointer ${colour} w-1/2 text-left py-2 px-3 rounded hover:bg-blue-500 text-gray-800`}
              onClick={onClick}
            >{buttonText}</button>
    )
}
