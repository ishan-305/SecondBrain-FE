export const ClientsSection = () => {
  return (
    <section className="flex flex-col px-36 mt-10 w-full max-md:px-5 max-md:max-w-full">
      <div className="self-center max-w-full text-center w-[1110px]">
        <h2 className="text-4xl font-semibold leading-none text-neutral-600 max-md:max-w-full">
          Our Clients
        </h2>
        <p className="mt-2 text-base text-neutral-500 max-md:max-w-full">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-center mt-4 w-full min-h-[98px] max-md:max-w-full">
        {[...Array(7)].map((_, index) => (
          <img
            key={index}
            loading="lazy"
            src={`https://cdn.builder.io/api/v1/image/assets/TEMP/b481f140385a542009e322ee920866269b0ac07e5334c3da1e792d6e56c76897`}
            className="object-contain shrink-0 self-stretch my-auto w-12 rounded-lg aspect-square"
            alt={`Client logo ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
