import "./Pics.css";

const images = [
  { id: 1, src: 1, title: "foo", description: "bar" },
  { id: 2, src: 2, title: "foo", description: "bar" },
  { id: 3, src: 3, title: "foo", description: "bar" },
  { id: 4, src: 4, title: "foo", description: "bar" },
  { id: 5, src: 5, title: "foo", description: "bar" },
  { id: 6, src: 6, title: "foo", description: "bar" },
  { id: 7, src: 7, title: "foo", description: "bar" },
  { id: 8, src: 8, title: "foo", description: "bar" },
  { id: 9, src: 9, title: "foo", description: "bar" },
  { id: 10, src: 10, title: "foo", description: "bar" },
  { id: 11, src: 11, title: "foo", description: "bar" },
  { id: 12, src: 12, title: "foo", description: "bar" },
  { id: 13, src: 13, title: "foo", description: "bar" },
  { id: 14, src: 14, title: "foo", description: "bar" },
  { id: 15, src: 15, title: "foo", description: "bar" },
  { id: 16, src: 16, title: "foo", description: "bar" },
  { id: 17, src: 17, title: "foo", description: "bar" },
  { id: 18, src: 18, title: "foo", description: "bar" },
  { id: 19, src: 19, title: "foo", description: "bar" },
  { id: 20, src: 20, title: "foo", description: "bar" },
  { id: 21, src: 21, title: "foo", description: "bar" },
  { id: 22, src: 22, title: "foo", description: "bar" },
  { id: 23, src: 23, title: "foo", description: "bar" },
  { id: 24, src: 24, title: "foo", description: "bar" },
  { id: 25, src: 25, title: "foo", description: "bar" },
];

function Pics() {
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const shuffledImages = shuffle(images);
  return (
    <div className="row">
      {shuffledImages.map(({ id, src, title, description }) => (
        <div className="col" key={id}>
          <img
            src={require(`./img/${src}.jpg`).default}
            title={title}
            alt={description}
          />
        </div>
      ))}
    </div>
  );
}

export default Pics;
