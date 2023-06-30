import { ReactElement, useState } from "react";
import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";
import { ThemeProvider } from "./context/ThemeContext";
import ChangeTheme from "./components/ChangeTheme";
function App(): ReactElement {
	const [counter, setCounter] = useState<number>(0);
  const add:(a:number,b:number)=>number = (a:number,b:number):number => {
    return a+b
  }
	return (
		<>
			<Heading title='Hello React Typescript' />
			<Section title='section title'>This is my section</Section>
			<Counter setCounter={setCounter}>Counter is {counter}</Counter>
			<List
				items={['☕️ coffee', '💻 code']}
				render={(item: string) => {
					return <b>{item}</b>;
				}}
			/>
      <ThemeProvider>
        <ChangeTheme/>
      </ThemeProvider>
		</>
	);
}

export default App;
