import React from "react";
import "../component-styles/irregularVerbs.scss";

const IrregularVerb = (props) => {
  const [value, setValue] = React.useState();

  const handleChangeValue = (event) => {
    setValue(event.target.value);
    props.function(props.id, event.target.value);
  };

  return (
    <tr className="irregular-verbs__row">
      <td className="irregular-verbs__cell irregular-verbs__cell--first">
        {props.first === null ? (
          <input
            className="irregular-verbs__cell--input"
            onChange={handleChangeValue}
          />
        ) : (
          props.first
        )}{" "}
      </td>
      <td className="irregular-verbs__cell irregular-verbs__cell--second">
        {props.second === null ? (
          <input
            className="irregular-verbs__cell--input"
            onChange={handleChangeValue}
          />
        ) : (
          props.second
        )}{" "}
      </td>
      <td className="irregular-verbs__cell irregular-verbs__cell--third">
        {props.third === null ? (
          <input
            className="irregular-verbs__cell--input"
            onChange={handleChangeValue}
          />
        ) : (
          props.third
        )}{" "}
      </td>
    </tr>
  );
};

export default IrregularVerb;
