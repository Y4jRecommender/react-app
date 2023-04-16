import { React, useState } from 'react'
import { Box, Grid, Typography, TextField, Container, ToggleButton, ToggleButtonGroup, Select, MenuItem, Button } from '@mui/material'
import { getTranslation } from '../../API/translation';
export default function Translation() {

    const [text, setText] = useState(true);
    const [lan, setLan] = useState("hi");
    const [dataLan, setDataLan] = useState("en");
    const [data, setData] = useState("");
    const [result, setResult] = useState("");
    const textChange = (event, newAlignment) => {
        setText(newAlignment);
        setLan("hi");
    };
    const lanChange = (event) => {
        setLan(event.target.value);
    };
    const dataLanChange = (event) => {
        setDataLan(event.target.value);
    };
    const translate = async () => {
        const result = await getTranslation(data, dataLan, lan);
        console.log(result);
    }

    return (
        <>
            <Container maxWidth="lg">
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
                                color="primary"
                                value={text}
                                exclusive
                                onChange={textChange}
                                aria-label="Platform"
                                sx={{ mt: 2 }}
                            >
                                <ToggleButton value={true}>Text</ToggleButton>
                                <ToggleButton value={false}>Speech</ToggleButton>
                            </ToggleButtonGroup>

                        </Grid>
                        <Grid item xs={5} sx={{ mt: 4 }}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: 3, textAlign: 'center' }}>
                                Input
                            </Typography>

                            {text && <>
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
                            </>}

                            {!text && <>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={dataLan}
                                    label="Language"
                                    onChange={dataLanChange}
                                    sx={{ mb: 4 }}
                                    fullWidth
                                >
                                    <MenuItem value="as">Assamese - অসমীয়া</MenuItem>
                                    <MenuItem value="bn">Bangla - বাংলা</MenuItem>
                                    <MenuItem value="brx">Boro - बड़ो</MenuItem>
                                    <MenuItem value="en">Indian English</MenuItem>
                                    <MenuItem value="gu">Gujarati - ગુજરાતી</MenuItem>
                                    <MenuItem value="hi">Hindi - हिंदी</MenuItem>
                                    <MenuItem value="kn">Kannada - ಕನ್ನಡ</MenuItem>
                                    <MenuItem value="ml">Malayalam - മലയാളം</MenuItem>
                                    <MenuItem value="mni">Manipuri - মিতৈলোন</MenuItem>
                                    <MenuItem value="mr">Marathi - मराठी</MenuItem>
                                    <MenuItem value="or">Oriya - ଓଡ଼ିଆ</MenuItem>
                                    <MenuItem value="pa">Punjabi - ਪੰਜਾਬੀ</MenuItem>
                                    <MenuItem value="raj">Rajasthani - राजस्थानी</MenuItem>
                                    <MenuItem value="ta">Tamil - தமிழ்</MenuItem>
                                    <MenuItem value="te">Telugu - తెలుగు</MenuItem>
                                </Select>
                            </>}

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
                                translate();
                            }}>Translate</Button>
                        </Grid>

                        <Grid item xs={5} sx={{ mt: 4 }}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: 3, textAlign: 'center' }}>
                                Output
                            </Typography>
                            {text && <>
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
                            </>}

                            {!text && <>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={lan}
                                    label="Language"
                                    onChange={lanChange}
                                    sx={{ mb: 4 }}
                                    fullWidth
                                >
                                    <MenuItem value="as">Assamese - অসমীয়া</MenuItem>
                                    <MenuItem value="bn">Bangla - বাংলা</MenuItem>
                                    <MenuItem value="brx">Boro - बड़ो</MenuItem>
                                    <MenuItem value="en">Indian English</MenuItem>
                                    <MenuItem value="gu">Gujarati - ગુજરાતી</MenuItem>
                                    <MenuItem value="hi">Hindi - हिंदी</MenuItem>
                                    <MenuItem value="kn">Kannada - ಕನ್ನಡ</MenuItem>
                                    <MenuItem value="ml">Malayalam - മലയാളം</MenuItem>
                                    <MenuItem value="mni">Manipuri - মিতৈলোন</MenuItem>
                                    <MenuItem value="mr">Marathi - मराठी</MenuItem>
                                    <MenuItem value="or">Oriya - ଓଡ଼ିଆ</MenuItem>
                                    <MenuItem value="pa">Punjabi - ਪੰਜਾਬੀ</MenuItem>
                                    <MenuItem value="raj">Rajasthani - राजस्थानी</MenuItem>
                                    <MenuItem value="ta">Tamil - தமிழ்</MenuItem>
                                    <MenuItem value="te">Telugu - తెలుగు</MenuItem>
                                </Select>
                            </>}

                            {text && <>

                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Translated Text"
                                    multiline
                                    maxRows={4}
                                    fullWidth
                                    value={result}
                                />
                            </>}
                        </Grid>
                    </Grid>
                </Box>
            </Container >
        </>
    )
}