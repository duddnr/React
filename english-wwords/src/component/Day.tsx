import { useParams } from "react-router-dom";
import dummy from "../db/data.json"
import Word, { IWord } from "./Word.tsx";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch.ts";
import React from "react";

export default function Day() {
    const { day } = useParams<{day : string}>();
    const words : IWord[] = useFetch("http://localhost:3001/words?day=" + (day));

    return (
        <>
        <h2>Day {day}</h2>
        {words.length === 0 && <span>Loading...</span>}
        <table>
            <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id} />
                ))}
            </tbody>
        </table>
        </>
    );
}