import { useState } from "react";
import styles from "./Search.module.css";

export default function Search({ cb }: any) {
  const [value, setValue] = useState<string>("");

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className={styles.search}>
      <div className="row">
        <div className="input-field col s12">
          <input
            type="search"
            placeholder="category search..."
            onKeyDown={handleKey}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setValue(event.target.value)
            }
            value={value}
          />
          <button
            className="btn"
            style={{ position: "absolute", top: 0, right: 0 }}
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
