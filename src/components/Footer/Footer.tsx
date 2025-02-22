export const Footer = () => {
  return (
    <footer className="max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start px-40 py-16 bg-gray-800 max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-start min-w-60 w-[350px]">
          <div className="flex gap-2.5 items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/74190eb1dc9913941d15cbdd3a65796488dbfb88fcbe4a4f8e3f2222e1aea762"
              className="object-contain shrink-0 self-stretch my-auto aspect-[1.43] w-[43px]"
              alt="Footer logo icon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/72c42506fb918aeeea1ef906eee0d51fd32012956b9a18b75b8f535c82dd29de"
              className="object-contain shrink-0 self-stretch my-auto aspect-[5.32] fill-white w-[138px]"
              alt="Footer logo text"
            />
          </div>

          <div className="flex overflow-hidden flex-col items-center self-stretch mt-10 w-full text-sm leading-none text-slate-100">
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p className="mt-2">All rights reserved</p>
          </div>

          <div className="flex overflow-hidden gap-4 items-start mt-10">
            {["Instagram", "Twitter", "Facebook", "LinkedIn"].map(
              (social, index) => (
                <img
                  key={index}
                  loading="lazy"
                  src={`https://cdn.builder.io/api/v1/image/assets/TEMP/98011fa7b6954b38308ac43b77bed6671caff34918de459957ce80f3efc56180`}
                  className="object-contain shrink-0 w-8 aspect-square"
                  alt={`${social} icon`}
                />
              )
            )}
          </div>
        </div>

        <nav className="flex overflow-hidden flex-wrap gap-8 items-start min-w-60 max-md:max-w-full">
          <div className="overflow-hidden w-40">
            <h3 className="text-xl font-semibold leading-snug text-white">
              Company
            </h3>
            <ul className="overflow-hidden mt-6 w-40 max-w-full text-sm leading-none text-slate-100">
              <li className="mt-3">About us</li>
              <li className="mt-3">Blog</li>
              <li className="mt-3">Contact us</li>
              <li className="mt-3">Pricing</li>
              <li className="mt-3">Testimonials</li>
            </ul>
          </div>

          <div className="overflow-hidden w-40">
            <h3 className="text-xl font-semibold leading-snug text-white">
              Support
            </h3>
            <ul className="overflow-hidden mt-6 w-40 max-w-full text-sm leading-none text-slate-100">
              <li className="mt-3">Help center</li>
              <li className="mt-3">Terms of service</li>
              <li className="mt-3">Legal</li>
              <li className="mt-3">Privacy policy</li>
              <li className="mt-3">Status</li>
            </ul>
          </div>

          <div className="overflow-hidden min-w-60 w-[255px]">
            <h3 className="text-xl font-semibold leading-snug text-white">
              Stay up to date
            </h3>
            <div className="mt-6 w-full text-sm leading-none text-gray-300 rounded-none max-w-[255px]">
              <div className="flex gap-5 justify-between px-3 py-2.5 rounded-lg bg-white bg-opacity-20">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent outline-none text-white placeholder-gray-300"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/724ca793173f9f71075b2b87b2508e28939fb977f18ccdefa3e308c9972ddcf6"
                  className="object-contain shrink-0 self-start aspect-square w-[18px]"
                  alt="Submit icon"
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};
