import React, { useState } from 'react'
import { Background, MainContainer} from './LoginPage.styled';
import  Overlay  from './components/Overlay';
import LoginPanel from './components/LoginPanel';
import RegisterPanel from './components/RegisterPanel';


function Home(): JSX.Element {

    const [count, setCount] = useState(true);

    function Toggle(){
        setCount(!count);
    }

    return (
        <Background>
            <MainContainer>
                <LoginPanel status={!count} />
                <RegisterPanel status={!count}/>
                <Overlay toggle={Toggle} status={!count} />
            </MainContainer>
        </Background>
    )
}

export default Home
