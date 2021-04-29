import React, { useContext } from "react";
//アクションのtype名を、ひとつのファイルにまとめて定数として管理する
import { DELETE_EVENT, ADD_OPERATION_LOG } from "../actions";
import AppContext from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const id = event.id;
  const handleClickDeleteButton = () => {
    dispatch({ type: DELETE_EVENT, id });

    //イベント追加時の操作ログを追加する
    dispatch({
      type: ADD_OPERATION_LOG,
      description: `イベント(id=${id})を削除しました。`,
      operatedAt: timeCurrentIso8601(),
    });
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickDeleteButton}
        >
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
