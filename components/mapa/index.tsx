import dynamic from "next/dynamic";
import { useMemo } from "react";

const Mapa: React.FunctionComponent = () =>{
    const Map:any = useMemo(
        () =>
          dynamic(() => import("./mapa"), {
            loading: () => <p>A map is loading</p>,
            ssr: false
          }),
        []
    );
    return (
    <section id="anchorFor" className="s-content s-mapa w-100 pb-0">
        <h2 className="text-center s-content__title--main mb-4 text-black">
            <b>Pontos de Wi-Fi</b>
        </h2>
        <div id="map"className="mt-3">
            <Map />
        </div>
    </section>
    )
}

export default Mapa;