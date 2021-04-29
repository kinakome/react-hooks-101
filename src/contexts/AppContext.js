import { createContext } from "react";
// Reduxを使うまでもない場合にreact contextをつかう

const AppContext = createContext();

//データを提供する側と使いたい側でimportする
//提供側はアプリケーションのトップレベルになることが基本
export default AppContext;

/* <AppContext.Provider value={"Hello, I am a Provider."}>
<AppContext.Consumer>で受け渡しできる（古いやり方） */

// →useContext(AppContext)で渡せるように
