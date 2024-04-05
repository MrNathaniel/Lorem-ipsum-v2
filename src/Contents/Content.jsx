const Content = (props) => {
  console.log(props);
  return <h1>Title={props.name}</h1>;
  <p>text={props.text}</p>;
};

export default Content;
