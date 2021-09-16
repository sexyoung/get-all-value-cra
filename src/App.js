const rand = () => ~~(Math.random() * 10);
const rand1 = rand();
const rand2 = rand();

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    for (var pair of f.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {[...Array(rand1).keys()].map((i) =>
          <div key={`input-${i}`}><input name={`input-${i}`} type="text" /></div>
        )}
        {[...Array(rand2).keys()].map((i) =>
          <div key={`select-${i}`}>
            <select name={`select-${i}`}>
              <option value="a">a</option>
              <option value="b">b</option>
              <option value="c">c</option>
            </select>
          </div>
        )}
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
