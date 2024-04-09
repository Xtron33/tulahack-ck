import {useRouter} from "next/router";


export default async function Book(){
    const router = useRouter()

    const res = await fetch(`https://6614f7e62fc47b4cf27d9b07.mockapi.io/api/libray/books/${router.query.id}`, {
        next: {revalidate: 120},
    })
}