import { POSTS_URL } from "../config/app-config";
import { PilarData } from "../domain/pilar/pilar";
import fetchJson from "../utils/fetchJson";

 export const getPilars = async(query = ''): Promise<PilarData[]> =>{

    const url = `${POSTS_URL}?$${query}`;
    const pilars = await fetchJson <PilarData[]>(POSTS_URL);

    return pilars;
}
