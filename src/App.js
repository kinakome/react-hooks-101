import React, { useEffect, useState } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  //useEffectはレンダリングのあとで実行される
  //domが最初に表示される時、変更される時に発火
  useEffect(() => {
    console.log("This is like componentDidMount or componentDidUpdate");
  });

  //空の配列を第二引数に渡してあげると、初回表示時のみ実行される
  useEffect(() => {
    console.log("This is like componentDidMount");
  }, []);

  // 配列の中に、変更を検知したい対象を設定すると、変更時に呼び出される
  useEffect(() => {
    console.log("This callback is for name only");
  }, [name]);

  return (
    <>
      <p>
        現在の{name}は、{price}円です.
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
