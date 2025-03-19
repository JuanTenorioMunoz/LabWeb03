const fetchDesc = async () => {
    try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();

        return(data.fact);

    } catch (error) {
        console.error(error)
    }
}

const fetchImage = async () => {
    try {
        const response = await fetch("https://cataas.com/cat?json=true");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();

        return(data.url);
    } catch (error) {
        console.error("Error fetching image:", error);
    }
};

export default {fetchDesc, fetchImage};