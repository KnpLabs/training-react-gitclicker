import "./Gitcoin.css";
import githubIcon from "@/assets/github.svg";

export function Gitcoin({ onClick }) {
  return (
    <button className="gitcoin" onClick={onClick} type="button">
      <img src={githubIcon} alt="Gitcoin" />
    </button>
  );
}
