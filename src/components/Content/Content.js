import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import styled from 'styled-components'

import ABIs from '../../config/abis.json'
import Gnomes from '../../assets/gnomes.png'

import Claim from './Claim/Claim'
import Breed from './Breed/Breed'
import Grow from './Grow/Grow'

const GnomeDiv = styled.div`
    max-width: 730px;
    width: 90%;
    height: 125px;
    background-color: white;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
`

const Content = ({ account, web3 }) => {
    const [utilContract, setUtilContract] = useState()
    const [crobyList, setCrobyList] = useState([])

    useEffect(() => {
        if (account !== undefined) {
            setUtilContract(new web3.eth.Contract(ABIs[0].abi, ABIs[0].address))
        }
    }, [account])

    return (
        <>
            <Grid container style={{ justifyContent: 'center', marginTop: 120, height: '100%' }}>
                <Claim account={account}
                    web3={web3}
                    utilContract={utilContract} />
                <Breed account={account}
                    web3={web3}
                    utilContract={utilContract}
                    setCrobyList={setCrobyList} />
                <Grow account={account}
                    web3={web3}
                    utilContract={utilContract}
                    crobyList={crobyList}
                />
            </Grid>
            <GnomeDiv>
                <img src={Gnomes} style={{ width: 271, height: 144, marginTop: -20 }} />
            </GnomeDiv>
        </>
    )
}

export default Content