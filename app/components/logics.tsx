export const isValidEmail = (email: string) => {
    if (email === '') {
      return false;
    }
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const getUser = () => {
    const accessToken = document.cookie.split('; ').find(row => row.startsWith('accessToken='));
    if (!accessToken) {return null;}
    const payload = accessToken.split('.')[1];
    const decoded = JSON.parse(atob(payload));
    // console.log(decoded);
    return decoded.name;
};

export const sendRequest = async (url: string, options: any) => {
    const requireAuth = options.requireAuth || false;
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };
    if (requireAuth) {
        const accessToken = document.cookie.split('; ').find(row => row.startsWith('accessToken='));
        const refreshToken = document.cookie.split('; ').find(row => row.startsWith('refreshToken='));
        headers['Cookie'] = `accessToken=${accessToken?.split('=')[1]}`;
        if (accessToken) {
            const payload = accessToken.split('.')[1];
            const decoded = JSON.parse(atob(payload));
            if (decoded.exp < Date.now()) {
                // console.log("access token expired");
                headers['cookie'] = `accessToken=${accessToken?.split('=')[1]}; refreshToken=${refreshToken?.split('=')[1]}`;
            }
        }
    }
    const response = await fetch(url, {
        method: options.method || 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(options.body) || null
    });
    if (response.ok) {
        const body = await response.json();
        if (body.accessToken) {
            document.cookie = `accessToken=${body.accessToken}`;
            document.cookie = `refreshToken=${body.refreshToken}`;
        }
        return body;
    }
    else {
        return null;
    }
};