import React, { useState } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      {/* <button onClick={setState(props)}>Reset</button> こう書くと無限ループになる */}
      {/* https://qiita.com/katsuomi/items/5a062dc1e4d0ab64ae21 */}
      <button onClick={() => setState(props)}>Reset</button>
      <input
        value={name}
        // スプレット構文を用いてnameだけ置き換え
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

App.defaultProps = {
  name: "サンプル",
  price: 1000,
};

export default App;
