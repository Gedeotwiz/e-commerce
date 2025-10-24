import GButton from "@/componemts/Share/GButton";
import GContainer from "@/componemts/Share/GContainer";
import GText from "@/componemts/Share/GText";
import { Colors } from "@/contants/colors";

export default function Home() {
  return (
    <GContainer
      className={`w-full bg-[${Colors.ESeven}] h-screen`}
    >
      <GText>Hello</GText>
      <GButton>Submit</GButton>
    </GContainer>
  );
}
