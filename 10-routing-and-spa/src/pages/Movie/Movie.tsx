import { useParams, useNavigate } from "react-router-dom";
import styles from "./Movie.module.css";

export default function Movie({}) {
  const { id } = useParams();
  const goBack = useNavigate();
  // console.log(value);

  return (
    <>
      <div className={styles.movie}>Movie {id}</div>
      <button className="btn" onClick={() => goBack(-1)}>
        Go Back
      </button>
    </>
  );
}
