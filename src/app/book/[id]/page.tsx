import {IBook} from "@/consts/interface/IBook";
import {fetchBook, fetchBookById} from "@/api/books.api";
import {Center, Container, Stack, Title} from "@mantine/core";
import style from "@/component/AllBooks/allbooks.module.css";
import NextImage from "next/image";
import {Image} from "@mantine/core";

const revalidate = 10
export async function generateStaticParams() {
    const pages: IBook[] = (await fetchBook() as IBook[])

    return pages.map((page) => ({
        slug: page.id.toString(),
    }))
}

export default async function Book({ params }: {params: {id: string}}){
    const {id} = params
    const book: IBook = await fetchBookById(id)

    return(
        <Center>
            <Container className={style.container} size={"xl"}>
                <Stack
                    align="stretch"
                    justify="center"
                    gap="xl"
                >
                    <Title order={2}>{book.title}</Title>
                    <Image fit={"cover"} src={book.image} alt="image"/>
                </Stack>
            </Container>
        </Center>

    )
}