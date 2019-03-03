import AV from 'leancloud-storage'
AV.init('vSpBIzidVtTr2HLkkSHcx5JG-gzGzoHsz', '71PEcWjlRMzHoHDus1PzLLtD')

export default {
    count: 20,
    AV,
    getCount: function() {
        let count = localStorage.getItem('count') || this.count
        return count
    }
}