import {revalidatePath} from "next/cache";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {deleteItem} from "@/components/crud";

export const RemoveTodo = async ({ id }: { id: number}) => {
    async function removeItem(formData: FormData) {
        'use server';
        const res = await deleteItem(formData.get('id'));
        console.log(res)
        revalidatePath('/');
    }

    return (
        <form action={removeItem}>
            <Input type="hidden" name="id" value={id} />
            <Button type="submit" variant="destructive">Delete</Button>
        </form>
    );
};
