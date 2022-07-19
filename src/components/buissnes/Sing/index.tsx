import React from "react";
import { useAppDispatch,  useAppSelector} from "../../../app/hooks";
import { setSingPopup } from "../../../app/slice/singPopupSlice";
import "./style.css";

function Sing() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.popup.open);
  return (
    <>
      {open ? (
        <div className="singWrapp">
          <div className="sing">
            <button className="singClose">
              <img
                src="close.svg"
                alt=""
                className="singCloseIcon"
                onClick={() => dispatch(setSingPopup(false))}
              />
            </button>
            <h2 className="singTitle">Войти</h2>
            <form className="singForm" action="" method="post">
              <label className="singLable">
                E-mail:
                <input
                  className="singEmail singInput"
                  type="email"
                  name="email"
                  id=""
                />
              </label>
              <label className="singLable">
                Пароль:
                <input
                  className="singPass singInput"
                  type="password"
                  name="password"
                  id=""
                />
              </label>
              <label className="singCheckbox">
                <input type="checkbox" name="" id="" />
                Запомнить меня
              </label>
              <button className="singSub">Отправить</button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Sing;
