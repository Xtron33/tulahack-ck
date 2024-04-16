'use client'

import {Card, CardSection, Container, Image, Pagination, SimpleGrid, Skeleton, Text, Title} from "@mantine/core";
import {IBook} from "@/consts/interface/IBook";
import style from "./allbooks.module.css"
import {fetchBook, fetchBookPagination} from "@/api/books.api";
import Link from "next/link";
import {usePagination} from "@mantine/hooks";
import {useEffect, useState} from "react";


function AllBooks(){
    const [activePage, setPage] = useState<number>(1)
    const [books, setBooks] = useState<IBook[]>([] as IBook[])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        fetchBookPagination(activePage).then((data) => setBooks(data)).finally(() => setLoading(false))
    }, [activePage]);

    return(


        <Container className={style.container} size={"xl"}>
            <Title order={1}>All Books</Title>
            <SimpleGrid verticalSpacing={"xl"} spacing={"xl"} cols={3}>
                {!loading ? books.map(elem =>

                        <Link key={elem.id} style={{textDecoration: "none"}} href={`/book/${elem.id}`}>
                            <Card className={style.card} shadow={"xl"} padding={"xl"} radius={"xl"} withBorder>
                                <CardSection>
                                    <Image
                                        src={elem.image}
                                        height={300}
                                        alt=""
                                    />
                                </CardSection>

                                <Title className={style.title} order={3}>{elem.title}</Title>
                                <Title order={5}>{elem.author}</Title>

                                <Text lineClamp={3} size={"md"} fw={300}>{elem.desc}</Text>
                            </Card>
                        </Link>
                    ) : <Skeleton height={900} width={1200}>
                </Skeleton>}

            </SimpleGrid>
            <Pagination total={80/6+1} onChange={setPage} value={activePage}/>
        </Container>

    )
}

export default AllBooks