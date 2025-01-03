"use client"; // permet d'ajouter de l'interactivité

import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { Button } from "~/src/components/form/Bouton";
import { Input } from "~/src/components/form/Input";

export const BoadForm = () =>{

    const router = useRouter();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const title = String(formData.get("title"))

        // on va faire un fetch pour appeler l'api
        fetch(`/api/boards`, {
            method: "POST",
            body: JSON.stringify({
                title,
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log({data});
            router.push('/');

        });    
    };

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <Input label="Title" name="title" />
            <Button type="submit">Create board</Button>
        </form>
    )
};