import { MutatingDots } from "react-loader-spinner";
import { useStore } from "@/store/storeGlobal";
import { useEffect, useState, useRef } from "react";

export const Loading = () => {
    const { loading, changeLoading } = useStore();
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        if (loading) {
            setIsVisible(true);

            timeoutRef.current = setTimeout(() => {
                setIsVisible(false);
                changeLoading();
            }, 2000);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [loading]);

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full bg-backBlack z-50 flex flex-col justify-center items-center transition-opacity duration-500 ${
                isVisible ? "opacity-100 block" : "opacity-0 hidden"
            }`}
        >
            <img src="/svg/logo.svg" alt="" />
            <MutatingDots
                visible={true}
                height="100"
                width="100"
                color="#5b5bc4"
                secondaryColor="#5b5bc4"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
            />
        </div>
    );
};

export default Loading;