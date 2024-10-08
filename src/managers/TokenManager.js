class TokenManager {
    static accessToken = ''

    static getAccessToken = () => {
        return this.accessToken
    }

    static setAccessToken = (token) => {
        this.accessToken = token
    }
}

export default TokenManager