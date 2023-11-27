import { Link, cn } from "@nextui-org/react";
import { QRCodeSVG } from "qrcode.react";
import MultiSlideElement from "../components/MultiSlideElement";
import { useContext } from "react";
import { SlideContext } from "../contexts/slide/SlideContext";

export default function Home() {
  const { slide } = useContext(SlideContext);

  return (
    <>
      <MultiSlideElement>
        <h1
          className={cn(
            "text-4xl lg:text-7xl font-bold mb-8 fixed left-[50vw] -translate-x-1/2 top-1/2 -translate-y-1/2 w-max max-w-full",
            "transition-all duration-300 ease-in-out",
            {
              "top-[15vh] translate-x-0 !left-4 !text-2xl lg:!text-4xl":
                slide > 0,
              "opacity-0": ![0, 1].includes(slide),
            }
          )}
        >
          Your presentation title
        </h1>
      </MultiSlideElement>
      {import.meta.env.VITE_BASE_URL && (
        <div className="absolute left-4 bottom-4">
          <QRCodeSVG
            value={import.meta.env.VITE_BASE_URL}
            size={200}
            bgColor="#ffffff"
            fgColor="#000000"
            level="L"
            includeMargin={true}
          />
          <p className="text-center text-lg">
            Join this presentation at
            <br />
            <Link
              href={import.meta.env.VITE_BASE_URL}
              className="text-xl font-semibold"
            >
              {import.meta.env.VITE_BASE_URL}
            </Link>
          </p>
        </div>
      )}
    </>
  );
}
