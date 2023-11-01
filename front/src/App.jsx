export default function App() {
  // A basic test to see if we can get data from the back
  async function testBack() {
    console.log("Testing back...");
    const response = await fetch("/api/photos");
    const data = await response.json();
    console.log("Got Data!", data);
  }

  testBack();



  return (
    <div>
      <h1>¡Hola mundo!</h1>
      <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, libero ipsa. Rem, eum. Officia iste sint inventore ipsa esse! Autem numquam deleniti harum a soluta, minima maiores mollitia et dolorum?</div>
    </div>
  );
}
