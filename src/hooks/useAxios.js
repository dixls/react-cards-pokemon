import { useState } from "react";
import Axios from "axios";
import uuid from "uuid";

const useAxios = (url) => {
    const [cards, setCards] = useState([]);
    const addCard = async (name) => {
        console.log(name);
        if(typeof(name) == "string") url = url+name+"/";
        const res = await Axios.get(url);
        setCards(cards => [...cards, { ...res.data, id: uuid() }]);
    }

    return [cards, addCard];
}

export default useAxios;
