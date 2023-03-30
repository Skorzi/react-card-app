import { useMemo } from "react";

function useSortedCards(cards, sortType, sortPort){
    const sortedCards = useMemo(() => {
        if(sortType){
            return [...cards].sort((a, b) => a[sortType].localeCompare(b[sortType]))
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