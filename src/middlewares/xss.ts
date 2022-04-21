import xss from "xss"

const xssVerify = (html: string) => {
    return xss(html);
};

export default xssVerify;