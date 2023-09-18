import { useState } from "react";

const add = async () => {
  return new Promise(async (resolve, reject) => {
    await setTimeout(() => {
      resolve("Data");
    }, 2_000);
  });
};

const Demo = () => {
  const [isLoading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);

    const result = await add();
    console.info(result);
    //setLoading((pr) => !pr);
    setLoading(false);
  };

  return (
    <div>
      <h2>Demo</h2>
      <button
        class="btn btn-success"
        type="button"
        onClick={handleSend}
        disabled={isLoading}
      >
        {isLoading && (
          <span class="spinner-border spinner-border-sm" role="status" />
        )}
        {isLoading ? "Loading..." : "Send"}
      </button>
    </div>
  );
};

export default Demo;
