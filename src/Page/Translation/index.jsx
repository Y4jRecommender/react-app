import { React, useState } from 'react'
import { Box, Grid, Typography, TextField, Container, ToggleButton, ToggleButtonGroup, Select, MenuItem, Button, Stack } from '@mui/material'
import { getTranslation, transliterate } from '../../API/translation';
import CircularProgress from "@mui/material/CircularProgress";
export default function Translation() {

    const [text, setText] = useState(true);
    const [lan, setLan] = useState("hi");
    const [dataLan, setDataLan] = useState("en");
    const [data, setData] = useState("");
    const [result, setResult] = useState("");
    const [gender, setGender] = useState("male");

    // Loading state
    const [loading, setLoading] = useState(false);

    const textChange = (event, newAlignment) => {
        setText(newAlignment);
        setResult("");
    };

    const genderChange = (event) => {
        setGender(event.target.value);
        setResult("");
    };

    const lanChange = (event) => {
        setLan(event.target.value);
    };
    const dataLanChange = (event) => {
        setDataLan(event.target.value);
    };
    const translate = async () => {
        setLoading(true);
        const result = await getTranslation(data, dataLan, lan);
        if (result.status === 200) {
            setResult(result.data.data[0]);
            setLoading(false);
        }
        else {
            setLoading(false);
            alert("Something went wrong");
        }
    }

    // Speech
    const getSpeech = async () => {
        setLoading(true);
        const result = await transliterate(data, dataLan, lan, gender);
        if (result.status === 200) {
            setResult(result.data.audio[0].audioContent);
            setLoading(false);
        } else {
            setLoading(false);
            alert("Something went wrong");
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(result)
            .then(() => {
                window.alert('Copied to clipboard!');
            })
            .catch((error) => {
                window.alert('Something went wrong!');
            });
    };


    return (
        <>
            <Container maxWidth="lg">
                {loading && <>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '80vh',
                    }}>
                        <CircularProgress />
                    </Box>
                </>}
                {!loading && <>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h5" component="div" sx={{ flexGrow: 1, mt: 4 }}>
                                    Welcome to Y4J Translation System
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sx={{ mt: 2 }}>
                                <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                                    Please select the whether you want to translate to text or speech. Then select the language you want to translate to.
                                </Typography>

                                <ToggleButtonGroup
                                    color="standard"
                                    value={text}
                                    exclusive
                                    onChange={textChange}
                                    aria-label="Platform"
                                    sx={{ mt: 2 }}
                                >
                                    <ToggleButton value={true}>Text</ToggleButton>
                                    <ToggleButton value={false}>Speech</ToggleButton>
                                </ToggleButtonGroup>

                                {!text &&
                                    <ToggleButtonGroup
                                        color="standard"
                                        value={gender}
                                        exclusive
                                        onChange={genderChange}
                                        aria-label="Platform"
                                        sx={{ mt: 2, ml: 3 }}
                                    >
                                        <ToggleButton value="male">Male</ToggleButton>
                                        <ToggleButton value="female">Female</ToggleButton>
                                    </ToggleButtonGroup>
                                }
                            </Grid>
                            <Grid item xs={5} sx={{ mt: 4 }}>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: 3, textAlign: 'center' }}>
                                    Input
                                </Typography>

                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={dataLan}
                                    label="Input language"
                                    onChange={dataLanChange}
                                    fullWidth
                                    sx={{ mb: 4 }}
                                >
                                    <MenuItem value="en">English</MenuItem>
                                    <MenuItem value="hi">Hindi - हिंदी</MenuItem>
                                    <MenuItem value="mr">Marathi - मराठी</MenuItem>
                                    <MenuItem value="ta">Tamil - தமிழ்</MenuItem>
                                    <MenuItem value="bn">Bangla - বাংলা</MenuItem>
                                    <MenuItem value="kn">Kannada - ಕನ್ನಡ</MenuItem>
                                    <MenuItem value="or">Oriya - ଓଡ଼ିଆ</MenuItem>
                                    <MenuItem value="te">Telugu - తెలుగు</MenuItem>
                                    <MenuItem value="gu">Gujarati - ગુજરાતી</MenuItem>
                                    <MenuItem value="ml">Malayalam - മലയാളം</MenuItem>
                                    <MenuItem value="pa">Punjabi - ਪੰਜਾਬੀ</MenuItem>
                                </Select>

                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Please add your text here"
                                    multiline
                                    maxRows={4}
                                    fullWidth
                                    value={data}
                                    onChange={(event) => {
                                        setData(event.target.value);
                                    }}
                                />
                            </Grid>

                            <Grid item xs={2} sx={{ mt: 18 }}>
                                <Button variant="contained" sx={{ width: '100%' }} onClick={() => {
                                    if (text) {
                                        translate();
                                    } else {
                                        getSpeech();
                                    }
                                }}>Translate</Button>
                            </Grid>

                            <Grid item xs={5} sx={{ mt: 4 }}>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: 3, textAlign: 'center' }}>
                                    Output
                                </Typography>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={lan}
                                    label="Input language"
                                    onChange={lanChange}
                                    fullWidth
                                    sx={{ mb: 4 }}
                                >
                                    <MenuItem value="hi">Hindi - हिंदी</MenuItem>
                                    <MenuItem value="mr">Marathi - मराठी</MenuItem>
                                    <MenuItem value="ta">Tamil - தமிழ்</MenuItem>
                                    <MenuItem value="bn">Bangla - বাংলা</MenuItem>
                                    <MenuItem value="kn">Kannada - ಕನ್ನಡ</MenuItem>
                                    <MenuItem value="or">Oriya - ଓଡ଼ିଆ</MenuItem>
                                    <MenuItem value="te">Telugu - తెలుగు</MenuItem>
                                    <MenuItem value="gu">Gujarati - ગુજરાતી</MenuItem>
                                    <MenuItem value="ml">Malayalam - മലയാളം</MenuItem>
                                    <MenuItem value="pa">Punjabi - ਪੰਜਾਬੀ</MenuItem>
                                </Select>

                                {text && <>

                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Translated Text"
                                        multiline
                                        maxRows={4}
                                        fullWidth
                                        value={result}
                                    />

                                    <Button variant="contained" onClick={copyToClipboard} sx={{ mt: 2 }}>Copy to Clipboard</Button>
                                </>}

                                {!text && <>
                                    <Stack spacing={2} direction="row" sx={{ width: '100%' }}>
                                        {/* Convert the result(base64) and play it as audio */}
                                        <audio controls >
                                            <source src={`data:audio/mp3;base64,${result}`} type="audio/mp3" />
                                        </audio>
                                        <Button variant="contained" onClick={() => {
                                            var link = document.createElement('a');
                                            link.href = `data:audio/mp3;base64,${result}`;
                                            link.download = 'audio.mp3';
                                            link.click();
                                        }} sx={{ mt: 2 }} >Download</Button>
                                    </Stack>
                                </>}
                            </Grid>
                        </Grid>
                    </Box>
                </>}
            </Container >
        </>
    )
}