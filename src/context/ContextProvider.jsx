export const Context = createContext();

const ContextProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode === "true") {
            setDarkMode(true);
            document.body.classList.add("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
        document.body.classList.toggle("dark");
        localStorage.setItem("darkMode", !darkMode);
    };

    const contextValue = {
        darkMode,
        toggleDarkMode,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;