import { useMemo, useState } from "react";
import { useFetching } from '../hooks/useFetching'
import CardPostService from '../API/CardPostService'



function useSortedCards(cards, sortType, sortPort){

    const sortedCards = useMemo(() => {
        if(sortType){
            //логика по работе фильтра
            console.log(cards)
            return[...cards]
        }else{
            return cards
        }}, [sortType, cards])

    return sortedCards;
}
export default function useCards(cards, sortType, sortPort, query){
    const sortedCards = useSortedCards(cards, sortType, sortPort)

    const sortedAndSearchedCards = useMemo(() => {
        return sortedCards.filter(card => card.ship_name.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedCards])

    return sortedAndSearchedCards

}