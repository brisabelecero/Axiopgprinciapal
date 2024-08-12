import Lottie from "react-lottie";
export function LottieAnim ({ancho, alto, animacion}){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animacion
    }

    return(
        <Lottie
            options={defaultOptions}
            height={`${alto}`} 
            width={`${ancho}`}
            isClickToPauseDisabled
        />
    )
}