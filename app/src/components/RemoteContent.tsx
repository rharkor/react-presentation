import { Button } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SlideContext } from "../contexts/slide/SlideContext";
import { useContext, useEffect, useRef } from "react";
import useTouch from "./useTouch";

export default function RemoteContent() {
  const { slide, setSlide } = useContext(SlideContext);
  const ref = useRef<HTMLDivElement>(null);
  useTouch(ref, (direction) => {
    if (direction === "left") {
      setSlide(slide + 1);
    } else if (direction === "right") {
      setSlide(slide - 1);
    }
  });

  useEffect(() => {}, []);

  return (
    <div
      className="h-screen w-screen flex flex-col gap-8 justify-center items-center"
      ref={ref}
    >
      <div className="relative">
        <p className="text-foreground-500 text-sm absolute -top-24 text-center inset-0">
          You can also swipe left or right
        </p>
        <Button
          className="rounded-full p-6 w-max h-max text-foreground-600 border"
          onClick={() => setSlide(slide + 1)}
        >
          <ChevronRight className="w-[60vw] !max-w-[400px] h-auto" />
        </Button>
      </div>
      <Button
        className="rounded-full p-2 min-w-[unset] w-max h-max text-foreground-600 border"
        onClick={() => setSlide(slide - 1)}
      >
        <ChevronLeft className="w-[10vw] !max-w-[80px] h-auto" />
      </Button>
    </div>
  );
}
