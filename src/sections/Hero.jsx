import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import { statistics } from "../constants"

const Hero = () => {
    return (
        <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat mb-3">Our Summer Collection</p>
                <h1 className="mt-6 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                    <br />
                    <span className="text-coral-red mt-3 inline-block pe-4">Nike </span>
                    Shoes
                </h1>
                <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 sm:max-w-sm mb-10">Discover the stylish and latest Nike arrivals, with quality comfort for your active life :)</p>
                <Button label="Shop now" iconURL={arrowRight} />
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((stat, index) => (
                        <div key={index}>
                            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                            <p className="font-montserrat leading-7 text-slate-gray">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Hero
