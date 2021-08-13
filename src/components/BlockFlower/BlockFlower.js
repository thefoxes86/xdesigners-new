import "./blockflower.scss";

function BlockFlower(props) {
  return (
    <>
      <div className={props.classprop}>
        <h2>{props.title}</h2>
        <img src={props.image} alt="" />
        <p>{props.text}</p>
      </div>
    </>
  );
}

export default BlockFlower;
