import { FcCancel } from "react-icons/fc";

function App() {
  return (
    <div className="text-center">
      Chores ToDo List <br />
      <input type="checkbox" />
      Create Guest Experience mobile check-in
      <button>
        <FcCancel />
      </button>
      <br />
      <input type="checkbox" />
      Document current CI/CD process
      <button>
        <FcCancel />
      </button>
      <br />
      <input type="checkbox" />
      Perform Code Review for final Pillow-Talk release
      <button>
        <FcCancel />
      </button>
      <br />
      <input type="checkbox" />
      Implement new color palette from Design Team
      <button>
        <FcCancel />
      </button>
      <br />
      <input type="checkbox" />
      Fix image uploading process for guest check-in
      <button>
        <FcCancel />
      </button>
      <br />
      <input type="checkbox" />
      Provide on-boarding documentation
      <button>
        <FcCancel />
      </button>
      <hr />
      DONE : 0 <br />
      Add todo <br />
      <input type="text" name="add-todo" id="add-todo" /> <br />
      <button className="border-black border-solid border-2">ADD TASK</button>
    </div>
  );
}

export default App;
