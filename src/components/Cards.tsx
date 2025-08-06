const Cards = () => {
  return (
    <div className="hidden lg:absolute -bottom-40 inset-x-0 mx-auto lg:flex gap-8 w-max text-black">
      <div className="h-60 w-60 bg-neutral-100 rounded-tl-lg rounded-br-lg p-4">
        THIS
      </div>
      <div className="h-60 w-60 bg-neutral-100 rounded-tl-lg rounded-br-lg p-4">
        THAT
      </div>
      <div className="h-60 w-60 bg-neutral-100 rounded-tl-lg rounded-br-lg p-4">
        AND THAT
      </div>
    </div>
  );
};

export default Cards;
