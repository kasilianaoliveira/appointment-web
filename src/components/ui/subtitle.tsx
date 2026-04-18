
type SubtitleProps = {
  subtitle: string;
}

export const Subtitle = ({ subtitle }: SubtitleProps) => {
  return (
    <h2 className="font-normal text-center lg:text-left lg:max-w-lg lg:text-[18px] text-gray-400 mb-4 leading-snug">
      {subtitle}
    </h2>
  );
}