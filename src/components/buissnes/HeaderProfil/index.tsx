import React from "react";

import { setSingPopup } from "../../../app/slice/singPopupSlice";
import { useAppDispatch } from "../../../app/hooks";

import styles from "./style.module.css";
import { Link } from "react-router-dom";

function HeaderProfil() {
  const dispatch = useAppDispatch();
  const [moduleState, setModuleState] = React.useState(false);
  return (
    <div className={styles.headerProfil}>
      <div className={styles.name}>Войти</div>
      <div
        className={styles.profile}
        onClick={() => dispatch(setSingPopup(true))}
      >
        <img src="person.png" alt="" className={styles.profileImage} />
      </div>
      {moduleState ? (
        <div className={styles.headerModule}>
          <div className={styles.profilInfo}>
            <div className={styles.moduleName}>Name</div>
            <div className={styles.profileModule}>
              <img src="person.png" alt="" className={styles.profileImage} />
            </div>
          </div>
          <ul className={styles.moduleList}>
            <li className={styles.listItem}>
              <Link to="#">Профиль</Link>
            </li>
            <li className={styles.listItem}>
              <Link to="#">Избранное</Link>
            </li>
            <li className={styles.listItem}>
              <Link to="#">Оценки</Link>
            </li>
            <li className={styles.listItem}>
              <Link to="#">Выход</Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default HeaderProfil;
