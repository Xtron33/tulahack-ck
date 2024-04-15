import {IBook} from "@/consts/interface/IBook";

export const fetchBook = async () => {

    const res =  await fetch('https://6614f7e62fc47b4cf27d9b07.mockapi.io/api/libray/books', {
        next: {revalidate: 60},
    })

    return res.json()
}

export const fetchBookById = async (id: string) => {
    const res = await fetch(`https://6614f7e62fc47b4cf27d9b07.mockapi.io/api/libray/books/${id}`, {
        next: {revalidate: 60}
    })

    return res.json()
}