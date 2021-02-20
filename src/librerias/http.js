/* No se importa nada porque fetch esta en todo el desarrollo de la implememtación*/

class Http {
    static instance = new Http();

    get = async (url) => {
        /*Raper para traer o atrapar los datos*/
        try {
          const request = await fetch(url);
          const json = await request.json();
          return json;
        } catch (err) {
          console.error('http get method error: ', err);
          throw Error(err);
        }
    };
    
    post = async (url, body) => {
        try {
            const requet = await fetch(url, {
                method: 'POST',
                body,
            });
            const json = await requet.json();
            return json;
        } catch (err) {
            console.error('http post method error: ', err);
            throw Error(err);
        }
    };

    remove = async (url) => {
        try {
            const request = await fetch(url, {
                method: 'DELETE',
            });
            const json = await request.json();
            return json;
        } catch (err) {
            console.error('http delete method error: ', err);
            throw Error(err);
        }
    };

    put = async (url, body) => {
        try {
            const request = await fetch(url, {
                method: 'PUT',
                body,
            });
            const json = await request.json();
            return json;
        } catch (err) {
            console.error('http put method error: ', err);
            throw Error(err);
        }
    };
}

export default Http;