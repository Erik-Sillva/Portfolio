interface Card {
    img: string;
    type: string;
    title: string;
    url: string;
}

const Card = ({ img, type, title, url }: Card) => {
    return (
        <>
            <a href={url} target='_blank'>
                {/* Image */}
                <div className="group relative h-[320px] flex justify-center items-center overflow-hidden hover:border-2 border-white/50 rounded-xl">
                    {/* Overlay */}
                    <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"></div>

                    {/* Img */}
                    <img
                    className="group-hover:scale-125 transition-all duration-500 block w-[350px]"
                    src={img}
                    alt="image"
                    />

                    {/* Prettie */}
                    <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                        <span className="text-gradient">{type}</span>
                    </div>

                    {/* Title */}
                    <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                        <span className="text-3xl text-white">{title}</span>
                    </div>
                </div>
            </a>
        </>
    );
};

export default Card;
