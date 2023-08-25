import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nopage() {
  return (
    <>
      <h4 className="text-white">
        Not Page Found
        <br />
        <FontAwesomeIcon icon={faExclamation} />
      </h4>
    </>
  );
}
