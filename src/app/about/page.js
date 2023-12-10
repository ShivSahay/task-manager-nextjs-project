async function takeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

export default async function About() {
  await takeTime();
  // throw new Error("This is menual Error");
  return (
    <div>
      <h1>This is About Page</h1>
    </div>
  );
}
