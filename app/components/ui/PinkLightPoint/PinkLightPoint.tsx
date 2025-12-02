type PositionProps = {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    height?: string;
    width?: string;
}

export function PinkLightPoint({
    top,
    bottom,
    left,
    right,
    height,
    width,
}: PositionProps) {
    return (
        <div
            style={{ top, bottom, left, right, width, height }}
            className={`absolute h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-[#FF007A] to-[#8A2BE2] opacity-20 blur-[150px] hidden sm:block`}
        ></div>
    );
}