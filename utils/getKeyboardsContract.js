import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x37108D2718A5d93e5B738113F414e2C3B6B52303';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
