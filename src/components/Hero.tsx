export const Hero = () => {
  return (
    <section className="flex flex-wrap gap-10 items-center px-36 py-24 w-full bg-slate-100 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-60 max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <h1 className="text-6xl font-semibold leading-[76px] text-neutral-600 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
            Lessons and insights{" "}
            <span className="text-green-500">from 8 years</span>
          </h1>
          <p className="mt-4 text-base text-neutral-500 max-md:max-w-full">
            Where to grow your business as a photographer: site or social media?
          </p>
        </div>
        <button className="gap-2.5 self-start px-8 py-3.5 mt-8 text-base font-medium text-center text-white whitespace-nowrap bg-green-500 rounded max-md:px-5">
          Register
        </button>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c244e3c001035d196baf07c06217f2d9ef1af20c1d22574fd41435422d39790c"
        className="object-contain self-stretch my-auto aspect-[0.96] min-w-60 w-[391px]"
        alt="Hero illustration"
      />
    </section>
  );
};
