export const getItems = async () => {
    const res = await fetch(`${process.env.API_URL}/todos`, {
        cache: "no-cache",
    });
    return await res.json();
}
export const addItem = async (title: FormDataEntryValue | null, completed: number) => {
    const res = await fetch(`${process.env.API_URL}/todos`, {
        cache: "no-cache",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, completed}),
    })
    return await res.json();
};
export const updateItem = async (id: FormDataEntryValue | null, title: FormDataEntryValue | null, completed: FormDataEntryValue | null) => {
    const res = await fetch(`${process.env.API_URL}/todos/${id}`, {
        cache: "no-cache",
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, completed}),
    })
    return await res.json();
};
export const deleteItem = async (id: any) => {
    const res = await fetch(`${process.env.API_URL}/todos/${id}`, {
        cache: "no-cache",
        method: 'DELETE',
    })
    return await res.json();
};
