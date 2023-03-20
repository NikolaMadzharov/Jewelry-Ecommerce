const baseUrl = 'https://localhost:7223/api';

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