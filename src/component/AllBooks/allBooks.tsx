import {Card, CardSection, Container, Image, SimpleGrid, Text, Title} from "@mantine/core";
import {IBook} from "@/consts/interface/IBook";
import style from "./allbooks.module.css"
import {fetchBook} from "@/api/books.api";
import Link from "next/link";


async function AllBooks(){


    const books: IBook[] = (await fetchBook() as IBook[]);

    return(


        <Container className={style.container} size={"xl"}>
            <Title order={1}>All Books</Title>
            <SimpleGrid verticalSpacing={"xl"} spacing={"xl"} cols={3}>
                {books.map(elem =>
                        <Link key={elem.id} href={`/book/${elem.id}`}>
                            <Card className={style.card} shadow={"xl"} padding={"xl"} radius={"xl"} withBorder>
                                <CardSection>
                                    <Image
                                        src={elem.image}
                                        height={400}
                                        alt=""
                                    />
                                </CardSection>

                                <Title className={style.title} order={3}>{elem.title}</Title>

                                <Text lineClamp={4} size={"md"} fw={300}>{elem.desc}</Text>
                            </Card>
                        </Link>
                    )}

            </SimpleGrid>
        </Container>

    )
}

export default AllBooks