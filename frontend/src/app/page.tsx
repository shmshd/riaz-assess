import {getItems} from "@/components/crud";
import {TrashIcon} from "@radix-ui/react-icons";

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {RemoveTodo} from "@/components/remove-item";

export default async function Home() {
    const todos = await getItems();
    return (
        <main className="max-w-4xl mx-auto mt-4">
            <div className="text-center my-5 flex flex-col gap-4">
                <h1 className="text-2xl font-medium">A list of things to do.</h1>
            </div>
            <div className="text-center">

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Task</TableHead>
                            <TableHead className="w-[200px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {todos.map((todo: any) => (
                            <TableRow key={todo.id}>
                                <TableCell align="left">{todo.title}</TableCell>
                                <TableCell align="right">
                                    <Dialog>
                                        <DialogTrigger>
                                            <Button variant="outline" size="icon">
                                                <TrashIcon className="h-4 w-4 text-red-500"/>
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Are you sure?</DialogTitle>
                                                <DialogDescription>
                                                    This action cannot be undone.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <DialogFooter>
                                                <RemoveTodo id={todo.id} />
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </main>
    );
}
