import AdminLogin from "./components/AdminLogin";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { useContext, useEffect } from "react";
import { SlideContext } from "./contexts/slide/SlideContext";
import { slides } from "./slides";
import { RootContext } from "./contexts/root/RootContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@nextui-org/react";

function App() {
  const { slide, setSlide, setMaxSlide } = useContext(SlideContext);
  const { admin } = useContext(RootContext);

  useEffect(() => {
    if (!admin) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        setSlide(slide + 1);
      }

      if (e.key === "ArrowLeft") {
        setSlide(slide - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [slide, setSlide, admin]);

  useEffect(() => {
    setMaxSlide(slides.length - 1);
  }, [setMaxSlide]);

  return (
    <main className="min-h-screen overflow-hidden">
      <div
        className="flex flex-row h-screen gap-2 w-max transition-all duration-300"
        style={{
          transform: `translateX(-${slide * 100}vw)`,
        }}
        role="presentation"
      >
        {slides.map((slide, i) => (
          <section
            className="flex flex-col gap-2 justify-center items-center h-screen w-screen p-4"
            key={i}
          >
            {slide()}
          </section>
        ))}
      </div>
      <div className="absolute right-3 bottom-3 flex flex-col gap-4 items-center">
        {admin && (
          <div className="flex flex-row gap-4">
            <ChevronLeft
              className={cn("text-foreground-500 w-10 h-10 cursor-pointer", {
                "opacity-50": slide === 0,
              })}
              onClick={() => setSlide(slide - 1)}
            />
            <ChevronRight
              className={cn("text-foreground-500 w-10 h-10 cursor-pointer", {
                "opacity-50": slide === slides.length - 1,
              })}
              onClick={() => setSlide(slide + 1)}
            />
          </div>
        )}
        <div className="flex flex-row gap-4">
          <div className="text-2xl text-foreground-400 font-extrabold">
            {slides.length ? slide + 1 : 0}/{slides.length}
          </div>
          <AdminLogin />
        </div>
      </div>
      <ThemeSwitcher />
    </main>
  );
}

export default App;
