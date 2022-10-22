import Search from "./search";
const Index = () => {
  return (
    <div>
      <section>
        <div className="w-full relative pb-10 px-6">
          <img
            className="absolute w-full inset-0 h-full object-cover object-center"
            src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png"
            alt="we care family"
          />

          <div className="pt-20 lg:flex items-center relative z-10 container mx-auto">
            <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
              <img
                className="mx-auto rounded-lg w-full lg:w-4/5" 
                src={require("../../assets/img/hero_img.png")}
                alt="Morocco"
              />
            </div>
            <div role="contentinfo" className="w-full lg:w-1/2 h-full mr-14">
              <p
                tabIndex="0"
                className="text-indigo-700 uppercase text-2xl mb-4"
              >
                Mekna'7 - We Care, We Share and We Love
              </p>
              <h1
                tabIndex="0"
                className="text-indigo-700 text-4xl lg:text-6xl font-black mb-8"
              >
                Best Bus Service in Morocco
              </h1>
              <p tabIndex="0" className="text-gray-800 font-regular mb-2">
                We Offer the best bus service in Morocco, we have the best
                drivers and the best buses, we are the best in Morocco.
              </p>
              <Search />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Index;
