import { createContext, useEffect, useState } from "react";
import runChat from './../config/gemini';

export const Context = createContext();
const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    // save prompt in local storage 
    useEffect(() => {
        const savedPrompts = JSON.parse(localStorage.getItem("prevPrompts")) || [];
        setPrevPrompts(savedPrompts);
    }, []);

    useEffect(() => {
        localStorage.setItem("prevPrompts", JSON.stringify(prevPrompts));
    }, [prevPrompts]);
    
    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev + nextWord);
        },75 * index);
    };

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    }

    const [conversationHistory, setConversationHistory] = useState([]);

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);

        let fullPrompt;
        if (prompt !== undefined) {
            fullPrompt = prompt;
        } else {
            setPrevPrompts((prev) => [...prev, input]);
            setRecentPrompt(input);
            fullPrompt = input;
        }

        const formattedHistory = conversationHistory.map(({ user, bot }) => 
            'User: ${user)\nBot: ${bot}'
        ).join("\n");

        const finalPrompt = formattedHistory ? '${formattedHistory}\nUser: $(fullPrompt)' : fullPrompt;

        let response = await runChat(finalPrompt);

        if (!response || typeof response !== "string") {
            response = "Maaf, terjadi kesalahan dalam mendapatkan respons.";
        }
        
        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++)
        {
            newResponse += i % 2 === 1 ? '<b>${responseArray[i]}</b>' : responseArray[i];
        }
        let responseWithLineBreaks = newResponse.split("*").join("</br>");
        let newResponseArray = responseWithLineBreaks.split(" ");

        for (let i = 0; i < newResponseArray.length; i++) 
            {
                const nextWord = newResponseArray[i];
                delayPara(i, nextWord+" ");
            }

            setConversationHistory((prev) => [
                ...prev,
                { user: fullPrompt, bot: response }
            ]);
        
            setLoading(false);
            setInput("");
    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;