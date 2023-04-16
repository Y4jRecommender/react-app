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

// Transliterating text
const transliterate = async (text, currLan, targetLan, gender) => {
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

        const response1 = await response.json();

        if (response.status === 200) {
            const data2 = {
                input: [
                    {
                        source: response1.data[0]
                    }
                ],
                config: {
                    gender: gender,
                    language: {
                        sourceLanguage: targetLan,
                    }
                }
            }

            const response2 = await fetch(`${URL}/tts/single`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data2),
            });

            const result = {
                status: response2.status,
                data: await response2.json(),
            };

            return result;
        }
        else {
            const result = {
                status: 503,
                data: "Service Unavailable"
            }
            return result;
        }
    }
    catch (err) {
        console.log(err);
    }
}

export { getTranslation, transliterate };