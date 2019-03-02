export default {
    count: 20,
    getCount: function() {
        let count = localStorage.getItem('count') || this.count
        return count
    }
}