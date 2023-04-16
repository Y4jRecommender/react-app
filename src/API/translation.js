const URL = process.env.REACT_APP_TRANSLATION_URL

const getTranslation = async (text, currLan, targetLan) => {
    const data = {
        data: text,
        currLan: currLan,
        targetLan: targetLan
    };

    try {
        const response = await fetch(`${URL}/translation/single`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = {
            status: response.status,
            data: await response.json(),
        };
        return result;
    }
    catch (err) {
        console.log(err);
    }
}

export { getTranslation };