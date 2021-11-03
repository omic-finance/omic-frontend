import { StableBond, LPBond, NetworkID, CustomBond, BondType } from "src/lib/Bond";
import { addresses } from "src/constants";

import { ReactComponent as DaiImg } from "src/assets/tokens/USDC.svg";
import { ReactComponent as OhmDaiImg } from "src/assets/tokens/OMIC-USDC.svg";
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
  isAvailable: { [NetworkID.Mainnet]: true, [NetworkID.Testnet]: true },
  bondIconSvg: DaiImg,
  bondContractABI: DaiBondContract,
  networkAddrs: {
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

export const ohm_dai = new LPBond({
  name: "omic_usdc_lp",
  displayName: "OMIC-USDC LP",
  bondToken: "USDC",
  decimals: 9,
  fraction_pow: 18,
  isAvailable: { [NetworkID.Mainnet]: true, [NetworkID.Testnet]: true },
  bondIconSvg: OhmDaiImg,
  bondContractABI: BondOhmDaiContract,
  reserveContract: ReserveOhmDaiContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x073c1BF7b6cf1706b967899Df2c5055F03307CF7",
      reserveAddress: "0xe4ad045abb586dbdae6b11a4d2c6ff5434b93ed1",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x073c1BF7b6cf1706b967899Df2c5055F03307CF7",
      reserveAddress: "0xe4ad045abb586dbdae6b11a4d2c6ff5434b93ed1",
    },
  },
  lpUrl:
    "https://app.sushi.com/add/0x86b3353387F560295a8Fa7902679735E5f076Bd5/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
});

// HOW TO ADD A NEW BOND:
// Is it a stableCoin bond? use `new StableBond`
// Is it an LP Bond? use `new LPBond`
// Add new bonds to this array!!
export const allBonds = [dai, ohm_dai];
export const allBondsMap = allBonds.reduce((prevVal, bond) => {
  return { ...prevVal, [bond.name]: bond };
}, {});

// Debug Log
// console.log(allBondsMap);
export default allBonds;
