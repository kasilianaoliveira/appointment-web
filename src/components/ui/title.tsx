
type TitleProps = {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <h1 className="text-center lg:text-left lg:max-w-lg text-2xl lg:text-4xl font-bold text-primary mb-6 leading-snug">
      {title}
    </h1>
  );
}