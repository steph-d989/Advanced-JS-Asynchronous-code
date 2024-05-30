//RESUELVE TUS EJERCICIOS AQUI

//--1--//
const getAllBreeds = async () => {
    try {
        const data = await fetch('https://dog.ceo/api/breeds/list/all');

        if (data.ok) {
            const listaPerros = await data.json();
            const perros = Object.keys(listaPerros.message)
            return perros;
        } else {
            throw `No se puede acceder a la data`;
        }
    } catch (error) {
        console.log(error)
    }
}
//--2--//
const getRandomDog = async () => {
    try {
        const data = await fetch('https://dog.ceo/api/breeds/image/random')

        if (data.ok) {
            const imagenesPerros = await data.json();
            const perrito = imagenesPerros.message;
            return perrito

        } else {
            throw `No se encontro la imagen`
        }
    } catch (error) {
        console.log(error)
    }
}
//--3--//
const getAllImagesByBreed = async () => {
    try {
        const data = await fetch('https://dog.ceo/api/breed/komondor/images')

        if (data.ok) {
            const listaPerritos = await data.json();
            const komondor = listaPerritos.message;
            return komondor
        } else {
            throw `No se encontro la lista`
        }
    } catch (error) {
        console.log(error)
    }
}
//--4--//
const getAllImagesByBreed2 = async (raza) => {
    const url = `https://dog.ceo/api/breed/${raza}/images`
    try {
        const data = await fetch(url)
        if (data.ok) {
            const listaPerritos = await data.json();
            const komondor = listaPerritos.message;
            return komondor
        } else {
            throw `No se encontro la lista`
        }
    } catch (error) {
        console.log(error)
    }
}
//--5--//
const getGitHubUserProfile = async (username) => {
    try {
        const data = await fetch(`https://api.github.com/users/${username}`)
        if (data.ok) {
            const lista = await data.json();
            return lista
        } else {
            throw `No se encontro la URL`
        }
    } catch (error) {
        console.log(error)
    }
}
//--6--//
const printGithubUserProfile = async (username) => {
    try {
        const data = await fetch(`https://api.github.com/users/${username}`)
        if (data.ok) {
            const lista = await data.json();
            const listaNueva = {
                img: `${lista.avatar_url}`,
                name: `${lista.name}`
            }
            return listaNueva
        } else {
            throw `No se encontro la URL`
        }
    } catch (error) {
        console.log(error)
    }
}
printGithubUserProfile('Stephani')
    .then((respuesta) => {
        console.log(respuesta);
    })
    .catch((error) => {
        console.log(error);
    });
//--7--//
const getAndPrintGitHubUserProfile = async (username) => {
    try {
        const data = await fetch(`https://api.github.com/users/${username}`)
        if (data.ok) {
            const lista = await data.json();
            return `<section><img src="${lista.avatar_url}" alt="${lista.name}"><h1>${lista.name}</h1><p>Public repos: ${lista.public_repos}</p></section>`;
        } else {
            throw `no se encontro la URL`
        }

    } catch (error) {
        console.log(error)
    }
}
getAndPrintGitHubUserProfile('Alenriquez96')
    .then((resp) => {
        console.log(resp)
    }).catch((error) => {
        console.log(error)
    })

//--9--//
const userNames = ['octocat', 'alenriquez96', 'alejandroreyesb'];
const realNames = ['The octocat', 'Alberto Enriquez', 'Alejandro Reyes']

const fetchGithubUsers = async(userNames) =>{

    let arrayUsuarios = userNames.map(async(username)=>{
        try{
            const response = await fetch('https://api.github.com/users/${username}')

            if(response.ok){
                const data = await response.json();
                return data;
            }else {
                throw `No se accedio a la URL`
            }
        }catch{
            console.log(error);
        }
    })
    let result = await Promise.all(arrayUsuarios);
    console.log(result);
    result.forEach((user)=>{
        console.log(user.name, user.html_url)
    })
    return result;
}