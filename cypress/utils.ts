class Utils {
    generateDate(days: number) {
        return new Date(new Date().setDate(new Date().getDate() + days))
      .toLocaleDateString('en-UK', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
      .toString();
    }

    generateRandomString(length: number) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
}

export default Utils;
