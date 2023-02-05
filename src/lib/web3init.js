import Web3 from 'web3'
import { userState } from '../stores/userstate';
import { CONTRACT_ADDR } from '$lib/config';
import { abi } from '$lib/abi';

export let connect = ()=>{}
export let account = ''
export let ethBalance = ''
export let contractName = 'nymm'

let web3 = new Web3(Web3.givenProvider)

export function web3Init(){    
    connect =()=>{
        ethereum.request({ method: "eth_requestAccounts" }).then((accounts)=>{
            account = accounts[0]	
            userState.set(true)
            web3.eth.getBalance(account).then((wei)=>{
                ethBalance = web3.utils.fromWei(wei, 'ether')
            })
        })
    }
}

export async function contractInteract(){
    let subuPillsContract = new web3.eth.Contract(abi, CONTRACT_ADDR, {from: account})

    await subuPillsContract.methods.name().call({from: account}).then((result)=>{
        contractName = result
        console.log('name: '+result)
    })
    
    /*
    subuPillsContract.methods.symbol().call({from: account}, function(error, result){
            console.log('Symbol: '+result)
    })
    
    subuPillsContract.methods.totalSupply().call({from: account}, function(error, result){
            console.log('total: '+result)
    })*/
}