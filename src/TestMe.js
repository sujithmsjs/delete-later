import { useRef, useState } from "react";

const TestMe = () => {
  const [lock, setLock] = useState(false);
  const [wrongs, setWrongs] = useState(0);
  const [rights, setRights] = useState(0);
  const que = useRef(null);
  const ans = useRef(null);
  let length = 0;

  const handleLock = (event) => {
    length = que.current.value.length;
    console.info(length);
    setLock(event.target.checked);
    ans.current.focus();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (que.current.value === ans.current.value) {
      setRights((pr) => pr + 1);
    } else {
      alert("Wrong answer!!!!");
      setWrongs((pr) => pr - 1);
    }
    // que.current.value = "";
    ans.current.value = "";

    console.info(que.current.value);
  };

  return (
    <div className="m-4">
      <div class="input-group mb-3">
        <div class="input-group-text">
          <input
            class="form-check-input mt-0"
            type="checkbox"
            onChange={handleLock}
            value=""
            aria-label="Checkbox for following text input"
          />
        </div>
        <input
          type={lock ? "password" : "text"}
          class="form-control"
          aria-label="Text input with checkbox"
          disabled={lock}
          ref={que}
        />
        <span class="input-group-text">{length}</span>
      </div>

      <form onSubmit={handleSubmit}>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            disabled={!lock}
            ref={ans}
          />
          <button
            class="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
            disabled={!lock}
          >
            Button
          </button>
        </div>
      </form>

      <h4 className="text-success">Rights: {rights} </h4>
      <h4 className="text-danger">Wrongs: {wrongs}</h4>
    </div>
  );
};

export default TestMe;
