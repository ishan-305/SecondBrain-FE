interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <article className="flex flex-col items-center self-stretch px-4 py-6 my-auto bg-white rounded-lg shadow-sm min-w-60 w-[299px]">
      <div className="flex flex-col max-w-full text-3xl font-bold leading-9 text-neutral-600 w-[267px]">
        <img
          loading="lazy"
          src={icon}
          className="object-contain self-center aspect-[1.16] w-[65px]"
          alt={`${title} icon`}
        />
        <h3 className="mt-4 text-center">{title}</h3>
      </div>
      <p className="gap-2 mt-2 max-w-full text-sm leading-5 text-neutral-500 w-[251px]">
        {description}
      </p>
    </article>
  );
};
