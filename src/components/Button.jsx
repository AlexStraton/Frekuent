

export default function Button({ buttonText, colour, onClick }) {
    return (
            <button
              className={`cursor-pointer ${colour} w-full text-left py-2 px-3 rounded hover:bg-blue-500 text-gray-800`}
              // onClick={() => {
              //   navigate("/About");
              //   setOpen(false);
              // }}
              onClick={onClick}
            >{buttonText}</button>
    )
}
