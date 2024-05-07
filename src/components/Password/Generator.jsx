const Generator = ({
  password,
  setPassword,
  length,
  setLength,
  passwordCopied,
  criterias,
  setCriterias,
  passGenerator
}) => {
  return (
    <>
      <div className="border border-gray-400 p-4">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          value={password}
          readOnly
          // onChange={(e) => {setPassword(e.target.value);setLength(e.target.value.length>8?e.target.value.length:8)}}
        />
        <br />
        <p className="w-80">{password}</p>
        <div className="flex justify-between items-center">
          <div>
            <input
              type="range"
              id="length"
              value={length}
              min={8}
              max={30}
              onChange={(e) => setLength(e.target.value)}
            />
            <span className="ml-2">{length}</span>
          </div>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded "
            onClick={passwordCopied}
          >
            Copy
          </button>
        </div>
        <label htmlFor="length">Length</label>

        <br />
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={passGenerator}>
          Generate
        </button>
        <br />
      </div>
    </>
  );
};
export default Generator;
