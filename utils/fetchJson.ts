const fetchJson = async <T>( url:string ): Promise<T> => {

    const rawdata = await fetch(url);
    const jsonData = await rawdata.json();
    console.log(jsonData);
    return jsonData;

}

export default fetchJson;