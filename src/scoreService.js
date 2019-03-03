import AV from 'leancloud-storage'
AV.init('vSpBIzidVtTr2HLkkSHcx5JG-gzGzoHsz', '71PEcWjlRMzHoHDus1PzLLtD')

const Score = AV.Object.extend('Score')
const User = AV.User
const query = new AV.Query('Score')
export { User, Score, query }