import { ArrowUpRight, Ticket } from "lucide-react";
import { Button } from "./ui/button";
import { Countdown } from "./common/Countdown";
import { FC, PropsWithChildren } from "react";
import { cn } from "./utils";

interface Props extends PropsWithChildren<{}> {
  variant: "home" | "ticket";
}

export const WelcomeHero: FC<Props> = ({ variant, children }) => {
  return (
    <section className={cn("mx-auto max-w-6xl w-full h-full", variant === 'home' ? 'mt-44' : 'mt-20')} >
      <div className="relative z-20 flex flex-col gap-14 items-center text-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-caTextSecondary text-lg md:text-[24px]">
            El evento de programación del año
          </h2>
          <p className="text-balance text-hero font-semibold lg:text-wrap">
            Da tu primera charla de programación y aporta valor a la comunidad
            en el{" "}
            <span className="inline-block bg-gradient-to-r from-caPrimary-500 to-caSecondary-500 text-transparent bg-clip-text">
              Aforshow
            </span>
          </p>
          {children}
        </div>

        {/* Wrapper was moved to countdown because its component logic, could be override by className prop */}
        <Countdown startFrom={new Date("2024-09-15")} />

        <div className="flex gap-6 pb-12">
        
          {variant === 'home' && (
            <a href="#ticket">
              <Button  size="xl">
                Ver ticket
                <Ticket className="size-6 ml-3" />
              </Button>
            </a>
          )}
          {variant === 'ticket' && (
            <a href="/">
              <Button  size="xl">
                Ir al inicio
                <ArrowUpRight className="size-6 ml-2" />
              </Button>
            </a>

          )}
            <Button variant='secondary' size="xl">
            Inscribirse
            <ArrowUpRight className="size-6 ml-2" />
          </Button>

        </div>
      </div>
    </section>
  );
};
