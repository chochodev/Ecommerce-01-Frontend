import Image from "next/image";
import variables from './variables.modules.scss';

export default function Home() {
  return (
    <main>
      <h1 style={{color: variables.primaryColor, fontSize: '1rem'}}>Home Page</h1>
    </main>
  );
}
