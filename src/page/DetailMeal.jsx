import Navbar from "../components/navbar";


function DetailMeal(){
    return (
        <>
        <Navbar/>
        <section class="bg-red">
        <div class=" max-w-full content-center flex flex-col justify-between items-center py-10  px-5 gap-9 md:px-8">
            {/* <!-- text --> */}
            <p class="text-cream font-normal  italic text-sm text-center  tracking-wide leading-relaxed md:text-lg lg:text-lg">Meal Recipe</p>
            {/* <!-- meals title --> */}
            <h1 id="detailTitle" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom"  class="font-medium text-center text-3xl text-cream md:text-5xl lg:text-6xl xl:text-[64px]"></h1>

            <img id="detailImg" data-aos="zoom-in-up" data-aos-duration="2000"  src="" alt="" class="w-screen h-60 object-cover md:h-96 lg:h-[34rem] xl:h-[80vh] "/>

            {/* <!-- Ingridient --> */}
            <div data-aos="fade-up" data-aos-duration="2000" class="ingridient w-full flex flex-col min-w-max   justify-start gap-5 lg:gap-7">
                <p class="text-cream text-xl pb-5 border-b border-cream  font-semibold md:text-2xl lg:text-[26px] lg:leading-normal">Ingridients</p>
                <p id="detailIngridient" class="text-sm font-normal text-cream tracking-wide md:text-lg"></p>
            </div>

            {/* <!-- instruction --> */}
            <div data-aos="fade-up" data-aos-duration="2500" class="instruction w-full flex flex-col justify-start gap-5 lg:gap-7">
                <p class="text-cream text-xl pb-5 border-b border-cream  font-semibold md:text-2xl lg:text-[26px]">Instruction</p>
                <p id="detailInstruct" class="text-sm font-normal leading-relaxed text-cream tracking-wide md:text-lg lg:leading-relaxed"></p>
            </div>
            {/* <!-- Tutorials --> */}
            <div data-aos="fade-up" data-aos-duration="2000" class="tutorial w-full flex flex-col justify-start items gap-5 lg:gap-7">
                <p class="text-cream text-xl pb-5 border-b border-cream  font-semibold md:text-2xl lg:text-[26px]">Watch Tutorials</p>
                <div data-aos="flip-up" data-aos-duration="3000" class="flex flex-col items-center w-full ">
                    <iframe id="detailTutor"  class="h-52  w-3/4 sm:h-64 md:h-96 xl:w-3/5 xl:h-[60vh] " src="" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>
        </>
        
    )
};

export default DetailMeal;