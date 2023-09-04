const token = '357d0a3316269ea39d179efecd857e6f460ccc056ce13de1'

export const server_calls = {
    get: async () => { 
        const response = await fetch(``,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },
    
}