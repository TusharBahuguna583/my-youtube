import Button from "./Button";

const list =  ["All", "Live", "Gaming", "Songs", "Soccer", "Cricket", "Cooking", "Valentines"]

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name={list[0]}/>
      <Button name={list[1]}/>
      <Button name={list[2]}/>
      <Button name={list[3]}/>
      <Button name={list[4]}/>
      <Button name={list[5]}/>
      <Button name={list[6]}/>
      <Button name={list[7]}/>
      <Button name={list[4]}/>
      <Button name={list[5]}/>
      <Button name={list[6]}/>
      <Button name={list[7]}/>
    </div>
  );
};

export default ButtonList;
