export const getTime = (): string => {
    let hours = new Date().getHours();
    if (hours >= 6 && hours <= 9) {
        return "早上好";
    } else if (hours >= 9 && hours <= 12) {
        return "中午好";
    } else if (hours > 12 && hours <= 18) {
        return "下午好";
    } else {
        return "晚上好";
    }
};





