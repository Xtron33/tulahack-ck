import {IBook} from "@/consts/interface/IBook";
import {fetchBook, fetchBookById} from "@/api/books.api";
import {Center, Container, Stack, Text, Title} from "@mantine/core";
import styles from "./book.module.css"
import NextImage from "next/image";
import {Image} from "@mantine/core";
import dayjs from "dayjs";

export const dynamicParams = true
export const revalidate = 60
export async function generateStaticParams() {
    const pages: IBook[] = (await fetchBook() as IBook[])

    return pages.map((page) => ({
        slug: page.id.toString(),
    }))
}

export default async function Book({ params }: {params: {id: string}}){
    const {id} = params
    const book: IBook = await fetchBookById(id)

    const date = dayjs(book.date).format('MMMM  YYYY').toString()

    return(
        <Center>
            <Container className={styles.container} size={"md"}>
                <Stack
                    align="stretch"
                    justify="center"
                    gap="md"
                >
                    <Title order={2}>{book.title}</Title>
                    <Image radius={"xl"} fit={"cover"} src={book.image} alt="image"/>
                    <Text size={"xl"} fw={800}>
                        {book.author} — {date}
                    </Text>
                    <Text size={"md"} fw={300}>
                        {book.desc}
                    </Text>
                </Stack>
            </Container>
        </Center>

    )
}