function Subtitle(props) {
  const { title } = props;
  return (
    <>
      <div>
        <h1 className="text-xl lg:text-2xl">{title}</h1>
      </div>
    </>
  );
}

export default Subtitle;
