import AV from 'leancloud-storage'
AV.init('vSpBIzidVtTr2HLkkSHcx5JG-gzGzoHsz', '71PEcWjlRMzHoHDus1PzLLtD')

const count = 20
const getCount = function() {
    let count = localStorage.getItem('count') || this.count
    return count
}

export default {
    count,
    AV,
    getCount
}