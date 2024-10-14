class DateUtils {
    getDifference = (from, to) => {
        const fromDate = new Date(from)
        const toDate = new Date(to)

        return (toDate - fromDate)/(1000 * 60 * 60 * 24)
    }
}

export default new DateUtils