function Bullet({ name }: { name: string }) {
  return (
    <input
      id={name}
      type="range"
      min="0"
      max="1000"
      className={`bullet bullet--${name}`}
    />
  );
}

export default Bullet;
