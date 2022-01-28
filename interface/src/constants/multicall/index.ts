import { ChainId } from 'moonbeamswap'
import MULTICALL_ABI from './abi.json'
import { multicall } from '../../moonbase_address.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x5e38556236cc1dDb30C9405BcB0eF0AaBA6d2961',
  [ChainId.STANDALONE]: '0x5e38556236cc1dDb30C9405BcB0eF0AaBA6d2961',
  [ChainId.MOONROCK]: multicall,
  [ChainId.MOONBASE]: multicall,
  [ChainId.MOONSHADOW]: multicall
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
