export const CallToAction = () => {
  return (
    <section className="flex flex-col items-center py-8 w-full text-center bg-slate-100 max-md:max-w-full">
      <h2 className="text-6xl font-semibold text-gray-800 leading-[76px] w-[887px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
        Pellentesque suscipit fringilla libero eu.
      </h2>
      <button className="flex gap-2 justify-center items-center px-8 py-3.5 mt-8 text-base font-medium text-white bg-green-500 rounded max-md:px-5">
        <span className="self-stretch my-auto">Get a Demo</span>
        <span className="flex shrink-0 self-stretch my-auto w-4 h-4 rotate-[3.1415925661670165rad]" />
      </button>
    </section>
  );
};
