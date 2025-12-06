type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function CustomInput({className, ...rest}: InputProps) {
    return (
        <input
        {...rest}
            className={`w-full h-14 px-5 rounded-xl bg-[#ffffff0d] text-white/70 placeholder-white/40 
                        focus:outline-none focus:ring-2 focus:ring-white
                        transition duration-300 ${className}`}
        />
    );
}
