import { Container } from "@/shared/ui/Container";
import { Title } from "@/shared/ui/Title";
import { Filters } from "@/widgets/Filters";
import { TopBar } from "@/widgets/TopBar";

export const MainPage = () => {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"></Title>
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[68px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16"></div>
          </div>
        </div>
      </Container>
    </>
  );
};
