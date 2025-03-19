import toast, { Toaster } from "react-hot-toast";

function CCard({ c }) {
  const handleClick = () => {
    toast.error(
      "Demo mode: Activated. Scheduling classes: Deactivated. Your gains: Pending."
    );
  };

  return (
    <>
      <div className="relative">
        <img src={c.img} alt={c.name} className="opacity-30 rounded-lg" />
        <div className="absolute bottom-5 text-center gap-2 flex flex-col">
          <h4 className="text-2xl font-semibold">{c.name}</h4>
          <p>{c.description}</p>
          <button
            className="text-neutral-950 bg-neutral-400 hover:bg-lime-600 duration-300 rounded-lg px-4 py-2 cursor-pointer active:scale-98 font-semibold mt-2 mx-10"
            onClick={handleClick}
          >
            Schedule Now
          </button>
          <Toaster />
        </div>
      </div>
    </>
  );
}

export default CCard;
