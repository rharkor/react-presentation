import { Button } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SlideContext } from "../contexts/slide/SlideContext";
import { useContext } from "react";

export default function RemoteContent() {
  const { slide, setSlide } = useContext(SlideContext);

  return (
    <div className="h-screen w-screen flex flex-col gap-8 justify-center items-center">
      <Button
        className="rounded-full p-6 w-max h-max text-foreground-600 border"
        onClick={() => setSlide(slide + 1)}
      >
        <ChevronRight className="w-[60vw] !max-w-[400px] h-auto" />
      </Button>
      <Button
        className="rounded-full p-2 min-w-[unset] w-max h-max text-foreground-600 border"
        onClick={() => setSlide(slide - 1)}
      >
        <ChevronLeft className="w-[10vw] !max-w-[80px] h-auto" />
      </Button>
    </div>
  );
}
