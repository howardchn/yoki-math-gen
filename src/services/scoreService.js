import conf from '../conf'

const AV = conf.AV
const Score = AV.Object.extend('Score')
const query = new AV.Query('Score')
export { Score, query }