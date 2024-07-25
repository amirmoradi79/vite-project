import { Result } from "./Result";
import { Summary } from "./Summary";

export function Container() {
  return (
    <div className="flex">
      <Result />
      <Summary />
    </div>
  );
}
