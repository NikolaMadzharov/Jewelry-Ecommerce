const baseUrl = 'https://localhost:7223/api';

export const getAll = async () =>{
    const response =  await fetch(`${baseUrl}/ring`);
    const result = await response.json();

    return result;
}


export const create = async (ring) => {
    console.log(ring);
    const response = await fetch(`${baseUrl}/ring`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(ring)
    });
    const result = await response.json();
    return result
}

export const getRingById = async (ringId) =>{
    const response = await fetch(`${baseUrl}/ring/${ringId}`);
    const result = await response.json();
    return result
}

export const update = async (ringId, ring) => {
    const response = await fetch(`${baseUrl}/ring/UpdateRing?ringId=${ringId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ring),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  };
  

  

export const deleteRing = async (ringId, token) => {
    try {
        const response = await fetch(`${baseUrl}/ring/${ringId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'x-authorization': token
            }
        });
        const result = await response.json();
        if (response.ok) {
            return result
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        return error
    }
};

export const likeRing = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/ring/like/${id}`, {
      method: 'POST'
    });

    if (!response.ok) {
      throw new Error(`Failed to like ring with id ${id}.`);
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

  

