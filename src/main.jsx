import { createRoot } from "react-dom/client";

import Button from "./Button";
import CustomButton from "./CustomButton";
import Greeting from "./Greeting";
import GreetingImage from "./GreetingImage";
import GreetingTime from "./GreetingTime";
import { PersonList } from "./PersonList";

function handleClick() {
  alert("Congratulation! You clicked a button!");
}

const greetings = (
  <div>
    <Greeting firstName="John" lastName="Doe" />
    <Greeting firstName="Georges" lastName="Abitbol" />
    <Greeting firstName="Edgar" lastName="KNP" />
  </div>
);

const customButton = (
  <CustomButton color="red">
    <span>Click me</span>
  </CustomButton>
);

const button = <Button onClick={handleClick}>Click me</Button>;

const greetingMorning = <GreetingTime name="John" isMorning={true} />;
const greetingEvening = <GreetingTime name="Jane" isMorning={false} />;

const greetingWithImage = <GreetingImage name="Edgar" withImage={true} />; // <GreetingImage name="Edgar" withImage />
const greetingWithoutImage = <GreetingImage name="Toto" withImage={false} />;

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    {greetings}
    ---
    {customButton}
    {button}
    ---
    <PersonList />
    ---
    {greetingMorning}
    {greetingEvening}
    ---
    {greetingWithImage}
    {greetingWithoutImage}
  </>,
);
