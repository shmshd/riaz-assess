import {Table, TableBody, TableCell, TableRow} from "@/components/ui/table";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {PlusIcon} from "@radix-ui/react-icons";
import {addItem} from "@/components/crud";
import {revalidatePath} from "next/cache";

export const AddTodo = async () => {
    async function createItem(formData: FormData) {
        'use server';
        const res = await addItem(formData.get('item'), 0);
        console.log(res)
        revalidatePath('/');
    }

    return (
        <form action={createItem}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell colSpan={2} align="left">
                            <Input type="text" name="item" placeholder="What to do?"/>
                        </TableCell>
                        <TableCell align="right">
                            <Button variant="outline" size="icon" type="submit">
                                <PlusIcon className="h-4 w-4"/>
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </form>
    );
};
