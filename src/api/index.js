import axios from 'axios'

const BASE = 'api.genius.com'

const TOKEN = 'wbI8ah8RbcRvqwIP9WK_ys-BP3OoQAuHdP_GVNzn947L9gCwvJtgh0zZJB_MPI8h'

export async function searchGenius(){
    try {
        const { data } = await axios.get(`${ BASE }/search?q=access_token=${TOKEN}`)
        return data;
    } catch (error){
      throw (error, 'Cannot get songs')
    }
}

export async function getSongs(){
    try {
        const { data } = await axios.get(`${ BASE }/songs?access_token=${TOKEN}`)
        return data;
    } catch (error){
      throw (error, 'Cannot get songs')
    }
}

