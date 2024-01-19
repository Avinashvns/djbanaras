
import { Box, Button, InputAdornment, Stack, TextField } from '@mui/material';
import SignPic from '../../asset/images/signin.jpg'
import { Bodytext, Headingtext, SubTitletext, Titletext } from '../../component/utils/Mytext';
import { MYCOLOR } from '../../component/utils/MyColor';

import { getDatabase, ref, set } from "firebase/database"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from "../../firebase"
import { useNavigate } from 'react-router-dom';

const db = getDatabase(app);
const auth = getAuth(app);


export default function SignUp() {
    const navigate = useNavigate();

    const putFirebasedb = () => {
        set(ref(db, "users/"), {
            id: 1,
            name: "Avinash Singh",
            age: 28,
        });
    }

    const signupUser = () => {
        createUserWithEmailAndPassword(
            auth,
            'avisingh@gmail.com',
            "Avi123"
        ).then((value) => console.log(value));
        navigate('/signin');
    }

    return (
        <>

            <Box style={{ margin: "10px" }} >
                <img src={SignPic} alt='Sign In Pic' height="350px" width="100%" style={{ borderRadius: '16px', objectFit: 'fill' }} />
            </Box>

            <Stack alignItems="center">

                <Box
                    sx={{
                        position: 'absolute',
                        zIndex: 0,
                        top: "220px",
                        backgroundColor: MYCOLOR.whitetext,
                        width: '500px',
                        // height: '600px',
                        borderRadius: '16px',
                        padding: 1,
                        textAlign: 'center',
                        // borderColor: 'rgba(255, 255, 0, 0.1)',

                        border: 'solid 1px rgba(0, 0, 0, 0.1) ',
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            zIndex: 1,
                            top: "-50px",
                            backgroundColor: MYCOLOR.primary,
                            width: '460px',
                            height: '160px',
                            borderRadius: '16px',
                            padding: 1,
                            textAlign: 'center',
                            marginX: 'auto',

                        }}
                    >
                        <Headingtext name={"Join Us Todays"} whiteColor={true} fontFamily='bold' ptop={5} lineHeight={1} />
                        <Titletext name={"Enter your email and password to register "} whiteColor={true} pX={10} lineHeight={1} />
                    </Box>

                    <Box sx={{ marginX: '10px' }}>
                        <TextField id='name' variant='standard' label='Name' fullWidth
                            sx={{ marginBottom: '10px' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                            }} />
                        <TextField label='Email' variant='standard' fullWidth sx={{ marginBottom: '10px' }} />
                        <TextField label='Password' variant='standard' fullWidth sx={{ marginBottom: '10px' }} />

                        <Button onClick={putFirebasedb}>Submit</Button>
                        <Button onClick={signupUser}>Create User</Button>

                    </Box>

                </Box>

                {/* Side bar Left */}

                {/* <Box sx={{
                    position: 'absolute',
                    bottom: '-200px',
                    // left: '-420px',
                    textAlign: 'center'
                    // backgroundColor: MYCOLOR.primary,
                }}
                >
                    <SubTitletext name={"@ 2024 , made with Love  "} whiteColor={false} lineHeight={1} />
                    <Titletext name={"by"} whiteColor={false} lineHeight={1} fontFamily='bold' />
                    <SubTitletext name={' Avinash Singh for a better web. '} whiteColor={false} lineHeight={1} />
                </Box> */}
                {/* Side bar Right */}
                {/* <Box sx={{
                    position: 'relative',
                    bottom: '376px',
                    left: '460px',
                    display: 'flex'
                    // backgroundColor: MYCOLOR.primary,
                }}
                >
                    <SubTitletext name={"About"} whiteColor={false} pright={2} />
                    <SubTitletext name={"Contact Us"} whiteColor={false} pright={2} />
                    <SubTitletext name={"License"} whiteColor={false} pright={2} />
                </Box> */}

            </Stack>
            <Box
                sx={{
                    position: 'absolute',
                    zIndex: 0,
                    bottom: "-120px",
                    backgroundColor: MYCOLOR.whitetext,
                    width: '100%',
                    padding: 1,
                    textAlign: 'center',
                }}
            >
                Hi
            </Box>

        </>
    );
} 