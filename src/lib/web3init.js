import Web3 from 'web3'
import { supabase } from '$lib/supabaseClient.js';
import { userState, userProfil} from '../stores/userstate';
import { CONTRACT_ADDR } from '$lib/config';
import { abi } from '$lib/abi';


export let connect = ()=>{}
export let account = ''
export let contractName = ''
let web3 = new Web3(Web3.givenProvider)


/**
 * Supabase User Profile
 * Check if profile already created and add it to store
 * else create new profile with user address and temp date
 * */ 
async function getOrAddProfile(){
    const Profil = await supabase.from('profiles').select('name, address, image').eq('address', account)

    if(Profil.data.length ==0){
        let user = 'User_'+ Math.floor(Math.random() * 999999);
        const newProfil = await supabase.from('profiles').insert({name:user, address: account})
    }else{
        userProfil.set(Profil.data[0])
    }
}



/**
 * Try to connect to Metamask
 */
function loginMetamask(){
    ethereum.request({ method: "eth_requestAccounts" }).then((accounts)=>{
        account = accounts[0]	
        userState.set(true)
        getOrAddProfile()
    })
}

export function web3Init(){    
    try{ loginMetamask() }catch(e){ console.log(e) }
    connect= ()=> loginMetamask()
}