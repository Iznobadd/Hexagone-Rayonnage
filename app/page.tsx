import HomePage from "../components/HomePage";

export default function Page() {
  return <HomePage year={new Date().getFullYear()} />;
}
