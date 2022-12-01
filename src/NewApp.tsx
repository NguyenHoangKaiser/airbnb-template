type Props = {
  name: string;
};

function newApp({ name }: Props) {
  return <div>{name}</div>;
}

export default newApp;
