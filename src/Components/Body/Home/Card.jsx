function Card({ image }) {
  return (
    <>
      <div className="card h-full bg-white mr-4">
        <div className="">
          <img src={image} alt="#" />
        </div>
      </div>
    </>
  );
}

export default Card;
