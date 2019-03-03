import conf from '../conf'

const User = conf.AV.User

class UserService {
    static verifyBySessionId() {
        return new Promise((res, rej) => {
            const token = UserService._getSessionToken()
            if (!token) {
                rej('token not found')
            }
    
            User.become(token).then(v => {
                res(v)
            }, err => rej(err) )
        })
    }

    static _getSessionToken() {
        let cookieStr = document.cookie
        let cookieItems = cookieStr.split(';').map(item => item.trim()).map(item => {
            const segs = item.split('=')
            return { key: segs[0], val: segs[1] }
        }).filter(item => item.key === 'token')

        if (cookieItems.length === 0) {
            return null
        } else {
            return cookieItems[0].val
        }
    }
}


export { User, UserService }