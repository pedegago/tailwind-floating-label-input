function Input({
    children,
    type,
    id,
    className,
    isInvalid,
    invalidFeedback,
    ...props
}) {
    const isTextArea = type === "textarea";
    const Element = isTextArea ? type : "input";

    return (
        <div className={`relative ${className ?? ""}`}>
            <Element
                id={id}
                className={`
                    peer w-full py-3.5 px-4 rounded-lg bg-brand-gray-100 text-lg
                    placeholder:text-transparent
                    focus:pt-6 focus:pb-1
                    not-placeholder-shown:pt-6 not-placeholder-shown:pb-1
                    ${isInvalid ? "ring-1 ring-inset ring-red-400" : ""}
                `}
                type={!isTextArea ? type : undefined}
                {...props}
            />
            <label
                htmlFor={id}
                className={`
                    py-4 px-4 pointer-events-none origin-top-left text-brand-gray-200 text-base
                    absolute left-0 top-0
                    peer-focus:scale-[.85]
                    peer-focus:-translate-y-1.5 peer-focus:translate-x-[0.18rem]
                    peer-not-placeholder-shown:scale-[.85]
                    peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:translate-x-[0.18rem]
                `}
            >
                {children}
            </label>
            {isInvalid && invalidFeedback && (
                <p className="text-red-400 text-sm mt-1">{invalidFeedback}</p>
            )}
        </div>
    );
}

export default Input;
