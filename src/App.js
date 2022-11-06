import InputDataState from "./InputDataState";
import InputWithoutState from "./InputWhithoutState";

export default function App() {
  return (
    <>
      <InputDataState />
      <br />
      <br />
      <h3>Without state</h3>
      <InputWithoutState />
    </>
  );
}
