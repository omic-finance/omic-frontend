import { StableBond, LPBond, NetworkID, CustomBond, BondType } from "src/lib/Bond";
import { addresses } from "src/constants";

import { ReactComponent as DaiImg } from "src/assets/tokens/USDC.svg";
import { ReactComponent as OhmDaiImg } from "src/assets/tokens/OMIC-USDC.svg";
import { ReactComponent as OhmMimImg } from "src/assets/tokens/OMIC-MIM.svg";
import { ReactComponent as MimImg } from "src/assets/tokens/MIM.svg";

import { ReactComponent as FraxImg } from "src/assets/tokens/FRAX.svg";
import { ReactComponent as OhmFraxImg } from "src/assets/tokens/OHM-FRAX.svg";
import { ReactComponent as OhmLusdImg } from "src/assets/tokens/OHM-LUSD.svg";
import { ReactComponent as OhmEthImg } from "src/assets/tokens/OHM-WETH.svg";
import { ReactComponent as wETHImg } from "src/assets/tokens/wETH.svg";
import { ReactComponent as LusdImg } from "src/assets/tokens/LUSD.svg";

import { abi as FraxOhmBondContract } from "src/abi/bonds/OhmFraxContract.json";
import { abi as BondOhmDaiContract } from "src/abi/bonds/OhmDaiContract.json";
import { abi as BondOhmLusdContract } from "src/abi/bonds/OhmLusdContract.json";
import { abi as BondOhmEthContract } from "src/abi/bonds/OhmEthContract.json";

import { abi as DaiBondContract } from "src/abi/bonds/DaiContract.json";
import { abi as ReserveOhmLusdContract } from "src/abi/reserves/OhmLusd.json";
import { abi as ReserveOhmDaiContract } from "src/abi/reserves/OhmDai.json";
import { abi as Z2OStyleBondContract } from "src/abi/bonds/Z2OStyleBond.json";
import { abi as ReserveOhmFraxContract } from "src/abi/reserves/OhmFrax.json";
import { abi as ReserveOhmEthContract } from "src/abi/reserves/OhmEth.json";

import { abi as FraxBondContract } from "src/abi/bonds/FraxContract.json";
import { abi as LusdBondContract } from "src/abi/bonds/LusdContract.json";
import { abi as EthBondContract } from "src/abi/bonds/EthContract.json";

import { abi as ierc20Abi } from "src/abi/IERC20.json";
import { getBondCalculator } from "src/helpers/BondCalculator";

// TODO(zx): Further modularize by splitting up reserveAssets into vendor token definitions
//   and include that in the definition of a bond
export const dai = new StableBond({
  name: "usdc",
  displayName: "USDC",
  bondToken: "USDC",
  decimals: 6,
  fraction_pow: 12,
  purchased_pow: 12,
  isAvailable: { [NetworkID.Ethereum]: false, [NetworkID.Mainnet]: false, [NetworkID.Testnet]: false },
  bondIconSvg: DaiImg,
  bondContractABI: DaiBondContract,
  networkAddrs: {
    [NetworkID.Ethereum]: {
      bondAddress: "0x6185f3d36b3d0ed280094b3732542a1662dbfe97",
      reserveAddress: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    },
    [NetworkID.Mainnet]: {
      bondAddress: "0x6185f3d36b3d0ed280094b3732542a1662dbfe97",
      reserveAddress: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x6185f3d36b3d0ed280094b3732542a1662dbfe97",
      reserveAddress: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    },
  },
});

export const mim = new StableBond({
  name: "mim",
  displayName: "MIM",
  bondToken: "MIM",
  decimals: 18,
  fraction_pow: 12,
  purchased_pow: 0,
  isAvailable: { [NetworkID.Ethereum]: true, [NetworkID.Mainnet]: true, [NetworkID.Testnet]: true },
  bondIconSvg: MimImg,
  bondContractABI: Z2OStyleBondContract,
  networkAddrs: {
    [NetworkID.Ethereum]: {
      bondAddress: "0xf4455aa7447bc4ac127e3593eaaefe109ede6f1a",
      reserveAddress: "0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a",
    },
    [NetworkID.Mainnet]: {
      bondAddress: "0xf4455aa7447bc4ac127e3593eaaefe109ede6f1a",
      reserveAddress: "0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xf4455aa7447bc4ac127e3593eaaefe109ede6f1a",
      reserveAddress: "0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a",
    },
  },
});
0x99cb07e3a57718b8a132b0de3f4980de52c4c93e

export const omic_mim = new LPBond({
  name: "omic_mim_lp2",
  displayName: "OMIC-MIM LP",
  bondToken: "MIM",
  decimals: 18,
  fraction_pow: 12,
  purchased_pow: 0,
  isAvailable: { [NetworkID.Ethereum]: true, [NetworkID.Mainnet]: true, [NetworkID.Testnet]: true },
  bondIconSvg: OhmMimImg,
  bondContractABI: Z2OStyleBondContract,
  reserveContract: ReserveOhmDaiContract,
  networkAddrs: {
    [NetworkID.Ethereum]: {
      bondAddress: "0x490b7e951692A1e81017d9Cef82876d2894d7c49",
      reserveAddress: "0xcf4f4f341b60587513b8fc01482237996c7e3fd3",
    },
    [NetworkID.Mainnet]: {
      bondAddress: "0x490b7e951692A1e81017d9Cef82876d2894d7c49",
      reserveAddress: "0xcf4f4f341b60587513b8fc01482237996c7e3fd3",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x490b7e951692A1e81017d9Cef82876d2894d7c49",
      reserveAddress: "0xcf4f4f341b60587513b8fc01482237996c7e3fd3",
    },
  },
  lpUrl:
    "https://app.sushi.com/add/0x86b3353387F560295a8Fa7902679735E5f076Bd5/0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A",
});

export const ohm_dai = new LPBond({
  name: "omic_mim_lp",
  displayName: "OMIC-MIM LP (REDEEM ONLY)",
  bondToken: "MIM",
  decimals: 18,
  fraction_pow: 12,
  purchased_pow: 0,
  isAvailable: { [NetworkID.Ethereum]: false, [NetworkID.Mainnet]: false, [NetworkID.Testnet]: false },
  bondIconSvg: OhmMimImg,
  bondContractABI: BondOhmDaiContract,
  reserveContract: ReserveOhmDaiContract,
  networkAddrs: {
    [NetworkID.Ethereum]: {
      bondAddress: "0x32a715C09e1E3F6b810A16aDacCa0656DdffE97a",
      reserveAddress: "0xcf4f4f341b60587513b8fc01482237996c7e3fd3",
    },
    [NetworkID.Mainnet]: {
      bondAddress: "0x32a715C09e1E3F6b810A16aDacCa0656DdffE97a",
      reserveAddress: "0xcf4f4f341b60587513b8fc01482237996c7e3fd3",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x32a715C09e1E3F6b810A16aDacCa0656DdffE97a",
      reserveAddress: "0xcf4f4f341b60587513b8fc01482237996c7e3fd3",
    },
  },
  lpUrl:
    "https://app.sushi.com/add/0x86b3353387F560295a8Fa7902679735E5f076Bd5/0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A",
});

// HOW TO ADD A NEW BOND:
// Is it a stableCoin bond? use `new StableBond`
// Is it an LP Bond? use `new LPBond`
// Add new bonds to this array!!
export const allBonds = [mim, omic_mim];
export const allBondsMap = allBonds.reduce((prevVal, bond) => {
  return { ...prevVal, [bond.name]: bond };
}, {});

// Debug Log
// console.log(allBondsMap);
export default allBonds;
