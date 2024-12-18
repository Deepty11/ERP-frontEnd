export const convertToBase64 = async (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () => { resolve(fileReader.result.split(',')[1])}
        fileReader.onerror = (error) => {reject(error)}
    })
}